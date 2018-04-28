import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import * as config from "../../config";

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ShareServiceProvider {

  constructor (private http: Http) {}

  // Home Category and Post
  get_homedata() : Observable<Comment[]>{
    return this.http.get(config.wordpress_url+'/wp-json/wp/custom/app?page=home')
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
  
  // All Category
  get_all_category() : Observable<Comment[]>{
    return this.http.get(config.wordpress_url+'/wp-json/wp/custom/app?page=category')
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  // Get Post by ID
  get_post() : Observable<Comment[]>{
    return this.http.get(config.wordpress_url+'/wp-json/wp/v2/posts/106')
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
