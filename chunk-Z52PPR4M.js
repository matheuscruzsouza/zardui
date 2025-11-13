import{a as E,b as L,c as B}from"./chunk-WZDQJZQB.js";import{a as S,b as Z}from"./chunk-24A6IXRG.js";import{a as F}from"./chunk-LHFLWQ6O.js";import{b as x,c,d as h,e as z,f as C,h as p,j as y,l as v,m as k,p as w}from"./chunk-VDBEX6S4.js";import{P as b}from"./chunk-WRYUIXCZ.js";import{Pb as l,Qb as e,Rb as n,Sb as s,Z as u,Za as m,ob as g,pc as i,sa as f}from"./chunk-FOI5FY2M.js";var R=(()=>{class r{isLoading=f(!1);loginForm=new C({email:new p("",[c.required,c.email]),password:new p("",[c.required,c.minLength(6)]),rememberMe:new p(!1)});static \u0275fac=function(o){return new(o||r)};static \u0275cmp=g({type:r,selectors:[["z-authentication-01"]],decls:34,vars:5,consts:[[1,"flex","min-h-screen","flex-col","lg:flex-row"],[1,"flex","flex-1","items-center","justify-center","bg-background","p-4","sm:p-8"],[1,"w-full","max-w-md","space-y-6","sm:space-y-8"],[1,"text-center"],[1,"text-2xl","font-bold","sm:text-3xl"],[1,"mt-2","text-sm","text-muted-foreground","sm:text-base"],[1,"p-4","sm:p-6","lg:p-8"],[1,"space-y-4","sm:space-y-6",3,"formGroup"],[3,"zRequired"],["z-input","","type","email","formControlName","email","placeholder","name@zard.com",1,"w-full"],[1,"flex","items-center","justify-between"],["z-button","","zType","link",1,"p-0"],["z-input","","type","password","formControlName","password","placeholder","\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",1,"w-full"],[1,"flex","items-center","gap-2"],["id","remember","formControlName","rememberMe"],["for","remember",1,"text-sm","cursor-pointer","select-none"],["type","submit","z-button","","zFull","",3,"zLoading","disabled"],[1,"text-center","text-sm","text-muted-foreground"],["z-button","","zType","link","href","#",1,"px-0"],[1,"hidden","flex-1","items-center","justify-center","bg-muted","p-8","lg:flex"]],template:function(o,a){o&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1",4),i(5,"Welcome back"),n(),e(6,"p",5),i(7,"Sign in to your account to continue"),n()(),e(8,"z-card",6)(9,"form",7)(10,"z-form-field")(11,"z-form-label",8),i(12,"Email"),n(),e(13,"z-form-control"),s(14,"input",9),n()(),e(15,"z-form-field")(16,"div",10)(17,"z-form-label",8),i(18,"Password"),n(),e(19,"a",11),i(20,"Forgot password?"),n()(),e(21,"z-form-control"),s(22,"input",12),n()(),e(23,"div",13),s(24,"z-checkbox",14),e(25,"label",15),i(26,"Remember me for 30 days"),n()(),e(27,"button",16),i(28,"Sign in"),n()()(),e(29,"p",17),i(30," Don't have an account? "),e(31,"a",18),i(32,"Sign up"),n()()()(),s(33,"aside",19),n()),o&2&&(m(9),l("formGroup",a.loginForm),m(2),l("zRequired",!0),m(6),l("zRequired",!0),m(10),l("zLoading",a.isLoading())("disabled",a.isLoading()))},dependencies:[w,y,x,h,z,v,k,b,F,S,Z,E,B,L],encapsulation:2})}return r})();var d={id:"authentication-01",title:"Authentication page",description:"A modern authentication page with email/password.",component:R,category:"Authentication",image:{light:"/blocks/authentication-01/light.png",dark:"/blocks/authentication-01/dark.png"},files:[{name:"authentication-01.component.ts",path:"src/components/authentication-01/authentication-01.component.ts",content:`import { ZardFormFieldComponent, ZardFormLabelComponent, ZardFormControlComponent } from '@zard/components/form/form.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ZardCheckboxComponent } from '@zard/components/checkbox/checkbox.component';
import { ZardButtonComponent } from '@zard/components/button/button.component';
import { ZardInputDirective } from '@zard/components/input/input.directive';
import { ZardCardComponent } from '@zard/components/card/card.component';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'z-authentication-01',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ZardButtonComponent,
    ZardCardComponent,
    ZardCheckboxComponent,
    ZardInputDirective,
    ZardFormFieldComponent,
    ZardFormLabelComponent,
    ZardFormControlComponent,
  ],
  templateUrl: './authentication-01.component.html',
})
export class Authentication01Component {
  protected readonly isLoading = signal(false);

  protected readonly loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    rememberMe: new FormControl(false),
  });
}
`,language:"typescript"},{name:"authentication-01.component.html",path:"src/components/authentication-01/authentication-01.component.html",content:`<div class="flex min-h-screen flex-col lg:flex-row">
  <div class="flex flex-1 items-center justify-center bg-background p-4 sm:p-8">
    <div class="w-full max-w-md space-y-6 sm:space-y-8">
      <div class="text-center">
        <h1 class="text-2xl font-bold sm:text-3xl">Welcome back</h1>
        <p class="mt-2 text-sm text-muted-foreground sm:text-base">Sign in to your account to continue</p>
      </div>

      <z-card class="p-4 sm:p-6 lg:p-8">
        <form [formGroup]="loginForm" class="space-y-4 sm:space-y-6">
          <z-form-field>
            <z-form-label [zRequired]="true">Email</z-form-label>
            <z-form-control>
              <input z-input type="email" formControlName="email" placeholder="name@zard.com" class="w-full" />
            </z-form-control>
          </z-form-field>

          <z-form-field>
            <div class="flex items-center justify-between">
              <z-form-label [zRequired]="true">Password</z-form-label>
              <a z-button zType="link" class="p-0">Forgot password?</a>
            </div>
            <z-form-control>
              <input z-input type="password" formControlName="password" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" class="w-full" />
            </z-form-control>
          </z-form-field>

          <div class="flex items-center gap-2">
            <z-checkbox id="remember" formControlName="rememberMe"></z-checkbox>
            <label for="remember" class="text-sm cursor-pointer select-none">Remember me for 30 days</label>
          </div>

          <button type="submit" z-button zFull [zLoading]="isLoading()" [disabled]="isLoading()">Sign in</button>
        </form>
      </z-card>

      <p class="text-center text-sm text-muted-foreground">
        Don't have an account?
        <a z-button zType="link" href="#" class="px-0">Sign up</a>
      </p>
    </div>
  </div>
  <aside class="hidden flex-1 items-center justify-center bg-muted p-8 lg:flex"></aside>
</div>
`,language:"html"}]};var N={featured:[d],sidebar:[],login:[d],signup:[],otp:[],calendar:[]};var _=(()=>{class r{blocks=new Map;constructor(){this.initializeBlocks()}registerBlock(t,o){let a=this.blocks.get(t)||[];a.push(o),this.blocks.set(t,a)}getBlocksByCategory(t){return this.blocks.get(t)||[]}getAllBlocks(){let t=[];return this.blocks.forEach(o=>t.push(...o)),t}getCategories(){return Array.from(this.blocks.keys())}initializeBlocks(){Object.entries(N).forEach(([t,o])=>{o.forEach(a=>{this.registerBlock(t,a)})})}static \u0275fac=function(o){return new(o||r)};static \u0275prov=u({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();export{_ as a};
