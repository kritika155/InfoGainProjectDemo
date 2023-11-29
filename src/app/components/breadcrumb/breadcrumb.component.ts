import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  NavigationEnd,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { IBreadCrumb } from './breadcrumb.interface';
import { filter, distinctUntilChanged } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css'],
})
export class BreadcrumbComponent implements OnInit {
  public breadcrumbs: IBreadCrumb[];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _location: Location
  ) {
    this.breadcrumbs = this.buildBreadCrumb(
      this.router.routerState.snapshot.root
    );
  }

  ngOnInit() {
    this.router.events
      .pipe(
        filter((event: any) => event instanceof NavigationEnd),
        distinctUntilChanged()
      )
      .subscribe(() => {
        this.breadcrumbs = this.buildBreadCrumb(
          this.router.routerState.snapshot.root
        );
      });
  }

  /**
   * Recursively build breadcrumb according to activated route.
   * @param route
   * @param url
   * @param breadcrumbs
   */
  buildBreadCrumb(
    route: ActivatedRouteSnapshot,
    url: string = '',
    breadcrumbs: IBreadCrumb[] = []
  ): IBreadCrumb[] {
    //If no routeConfig is avalailable we are on the root path
    let label =
      route.routeConfig && route?.routeConfig.data
        ? route.routeConfig.data['breadcrumb']
        : '';
    let isClickable =
      route.routeConfig &&
      route.routeConfig.data &&
      route.routeConfig.data['isClickable'];
    let path: string | undefined =
      route.routeConfig && route.routeConfig.data ? route.routeConfig.path : '';

    // If the route is dynamic route such as ':id', remove it
    if (path) {
      const lastRoutePart = path.split('/').pop();
      if (lastRoutePart) {
        const isDynamicRoute = lastRoutePart.startsWith(':');
        if (isDynamicRoute && !!route.params) {
          const paramName = lastRoutePart.split(':')[1];
          path = path.replace(lastRoutePart, route.params[paramName]);
          label = route.params[paramName];
        }
      }
    }

    //In the routeConfig the complete path is not available,
    //so we rebuild it each time
    const nextUrl = path ? `${url}/${path}` : url;

    const breadcrumb: IBreadCrumb = {
      label: label,
      url: nextUrl,
    };
    // Only adding route with non-empty label
    const newBreadcrumbs = breadcrumb.label
      ? [...breadcrumbs, breadcrumb]
      : [...breadcrumbs];
    if (route.firstChild) {
      //If we are not on our current path yet,
      //there will be more children to look after, to build our breadcumb
      return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }
    return newBreadcrumbs;
  }
  navigateBack() {
    this.router.navigate(['/home']);
  }
}
