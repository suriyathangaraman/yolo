"use strict";(self.webpackChunkfe_tn_schools=self.webpackChunkfe_tn_schools||[]).push([[293],{6293:(P,s,r)=>{r.r(s),r.d(s,{LandingPageModule:()=>O});var g=r(9808),l=r(5208),c=r(1083),n=r(5e3),d=r(8128),p=r(2159);function f(o,i){if(1&o&&(n.TgZ(0,"li",81),n.TgZ(1,"div",82),n.TgZ(2,"time",83),n.TgZ(3,"strong"),n._uU(4),n.ALo(5,"date"),n.qZA(),n.TgZ(6,"span"),n._uU(7),n.ALo(8,"date"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(9,"div",84),n.TgZ(10,"p"),n.TgZ(11,"a",85),n._uU(12),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&o){const e=i.$implicit;n.xp6(4),n.Oqu(n.xi3(5,4,null==e?null:e.startDate,"MMM")),n.xp6(3),n.Oqu(n.xi3(8,7,null==e?null:e.startDate,"d")),n.xp6(4),n.Q6J("href",null==e?null:e.link,n.LSH),n.xp6(1),n.Oqu(null==e?null:e.name)}}function m(o,i){if(1&o&&(n.TgZ(0,"div",86),n.TgZ(1,"h3"),n._uU(2),n.qZA(),n.TgZ(3,"div",77),n._uU(4),n.qZA(),n.qZA()),2&o){const e=n.oxw();n.xp6(2),n.Oqu(e.lang.language.beMentor),n.xp6(2),n.Oqu(e.lang.language.forStudents)}}function u(o,i){if(1&o&&(n.TgZ(0,"div",86),n.TgZ(1,"div",77),n._uU(2),n.qZA(),n.TgZ(3,"h3"),n._uU(4),n.qZA(),n.qZA()),2&o){const e=n.oxw();n.xp6(2),n.Oqu(e.lang.language.forStudents),n.xp6(2),n.Oqu(e.lang.language.beMentor)}}function h(o,i){if(1&o&&(n.TgZ(0,"div",86),n.TgZ(1,"h3"),n._uU(2),n.qZA(),n.TgZ(3,"div",77),n._uU(4),n.qZA(),n.qZA()),2&o){const e=n.oxw();n.xp6(2),n.Oqu(e.lang.language.beSponsor),n.xp6(2),n.Oqu(e.lang.language.forHigherEdu)}}function b(o,i){if(1&o&&(n.TgZ(0,"div",86),n.TgZ(1,"div",77),n._uU(2),n.qZA(),n.TgZ(3,"h3"),n._uU(4),n.qZA(),n.qZA()),2&o){const e=n.oxw();n.xp6(2),n.Oqu(e.lang.language.forHigherEdu),n.xp6(2),n.Oqu(e.lang.language.beSponsor)}}const _=[{path:"",component:(()=>{class o{constructor(e,t,a){this.service=e,this.lang=t,this.route=a,this.isLoggedIn=!1,this.title="",this.examsList=[],this.examsNotifications=[]}ngOnInit(){this.latestNotifications(),this.lang.events$.forEach(e=>{"home"==this.route.url.split("/")[1]&&this.latestNotifications()})}latestNotifications(){this.service.getService("/"+(this.lang.type?"exams?notificationStatus=Announced and Open":"exams?notificationStatus=\u0b85\u0bb1\u0bbf\u0bb5\u0bc1\u0baa\u0bcd\u0baa\u0bc1 \u0bb5\u0bc6\u0bb3\u0bbf\u0baf\u0bbe\u0b95\u0bbf\u0bb5\u0bbf\u0b9f\u0bcd\u0b9f\u0ba4\u0bc1. \u0bb5\u0bbf\u0ba3\u0bcd\u0ba3\u0baa\u0bcd\u0baa\u0bbf\u0b95\u0bcd\u0b95\u0bbf\u0bb2\u0bbe\u0bae\u0bcd")).subscribe(a=>{this.examsNotifications=a.results})}moveTo(e){this.isLoggedIn=!!this.service.session("get","Authorization"),this.isLoggedIn?this.route.navigate(["/main/"+e]):this.service.showToastr("You have to login!","warning")}moveToRegistration(e){this.route.navigate([e])}moveToLoans(){this.route.navigate(["/main/loans"])}moveToOverview(e){this.route.navigate(["/main/categories/exams/",e])}chooseType(e,t){this.title=t,this.section=e,this.route.navigate(["/main/categories",this.section])}moveToList(e){this.route.navigate(["/main/categories",this.section])}}return o.\u0275fac=function(e){return new(e||o)(n.Y36(d.v),n.Y36(p.T),n.Y36(c.F0))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-landing-page"]],decls:142,vars:28,consts:[[1,"home-carousel","mt-6"],[1,"row"],[1,"col-sm-12","col-md-12","col-lg-9","col-xl-9","margin-top-25"],["id","carouselExampleCaptions","data-bs-touch","true","data-bs-interval","60000","data-bs-ride","carousel",1,"carousel","slide"],[1,"carousel-indicators"],["type","button","data-bs-target","#carouselExampleCaptions","data-bs-slide-to","0","aria-current","true","aria-label","Slide 1",1,"active"],["type","button","data-bs-target","#carouselExampleCaptions","data-bs-slide-to","1","aria-label","Slide 2"],["type","button","data-bs-target","#carouselExampleCaptions","data-bs-slide-to","2","aria-label","Slide 3"],["type","button","data-bs-target","#carouselExampleCaptions","data-bs-slide-to","3","aria-label","Slide 4"],["type","button","data-bs-target","#carouselExampleCaptions","data-bs-slide-to","4","aria-label","Slide 5"],[1,"carousel-inner","carousel-res"],[1,"carousel-item","active","h-100"],["src","/assets/images/banner/1.jpg","alt","...",1,"d-block","w-100","h-100",2,"transform","scale(1.2)"],[1,"carousel-item","h-100"],["src","/assets/images/banner/2.jpg","alt","...",1,"d-block","w-100","h-100",2,"transform","scale(1.1)"],["src","/assets/images/banner/3.jpg","alt","...",1,"d-block","w-100","h-100",2,"transform","scale(1.1)"],["src","/assets/images/banner/4.jpg","alt","...",1,"d-block","w-100","h-100",2,"height","400px"],["src","/assets/images/banner/5.jpg","alt","...",1,"d-block","w-100","h-100",2,"transform","scale(1.1)"],[1,"col-sm-12","col-md-12","col-lg-3","col-xl-3"],[1,"fs-12","pt-0","pb-0"],[1,"container"],[1,"d-flex","justify-content-center"],[1,"section-header","mb-3"],[1,""],["src","/assets/images/icons/exam-pad-home.png","alt","",1,"pe-2"],["onmouseover","this.stop();","onmouseout","this.start();","scrollamount","5","direction","up",1,"mt-2",2,"font-size","1em","height","310px"],[1,"list-group","list-group-flush"],["class","d-flex py-4",4,"ngFor","ngForOf"],[1,"m-3","d-flex","justify-content-evenly","row","mt-5"],[1,"col-sm-6","col-md-6","col-lg-2","col-xl-2"],[1,"card-banner","card-banner-courses","text-center","cursor-pointer","mb-3",3,"ngClass","click"],[1,"py-5","my-3","fs-15","fw-600","ellipse-oneline"],[1,"card-footer","bg-color-courses"],[1,"icon-up"],["src","/assets/images/exams/certificate.png","height","45",1,""],[1,"card-banner","card-banner-college","text-center","cursor-pointer","mb-3",3,"ngClass","click"],[1,"card-footer","bg-color-college"],["src","/assets/images/exams/colleges.png","height","45",1,""],[1,"card-banner","card-banner-exams","text-center","cursor-pointer","mb-3",3,"ngClass","click"],[1,"py-5","my-3","fs-14","fw-600","ellipse-oneline"],[1,"card-footer"],["src","/assets/images/exams/exams.png","height","40",1,""],[1,"card-banner","card-banner-scholarships","text-center","cursor-pointer","mb-3",3,"ngClass","click"],[1,"card-footer","bg-color-scholarships"],["src","/assets/images/exams/scholarships.png","height","45",1,""],[1,"card-banner","card-banner-loans","text-center","cursor-pointer","mb-3",3,"ngClass","click"],[1,"card-footer","bg-color-loan"],["src","/assets/images/exams/rupee-icon.svg","height","45",1,""],[1,"card-banner","card-banner-careers","text-center","cursor-pointer","mb-3",3,"ngClass","click"],[1,"card-footer","bg-color-careers"],["src","/assets/images/exams/careers.png","height","45",1,""],[1,"mt-5"],[1,"about-us-counts","fs-12"],[1,"container-fluid"],[1,"count-students"],["src","/assets/images/landing-page/avatar.png","height","45px"],[1,"ps-3","mb-0"],[1,"section-content"],[1,"top-ornament"],[1,"text-center","mt-3","d-blue","fs-28","fw-600","letter-spacing-1px","fs-5"],[1,"bottom-ornament"],[1,"mentor-section","py-0"],[1,"col-sm-12","col-md-12","col-lg-4","col-xl-4","d-flex","justify-content-center"],[1,"fall-item","fall-effect","d-flex","justify-content-end-card","pe-3"],["src","/assets/images/landing-page/mentor.png",1,"box-shadow-img-1","img-mobile"],[1,"mask","d-flex","justify-content-center"],[1,"hover-center-1"],["class","text-start",4,"ngIf"],[1,"hover-center-2"],["type","button",1,"btn","btn-light","orange","fw-600","p-2","px-3",3,"click"],[1,"bi","bi-arrow-right"],[1,"fall-item","fall-effect","pe-3"],["src","/assets/images/landing-page/girls.png",1,"box-shadow-img-2","img-mobile"],["type","button",1,"btn","btn-light","green","fw-600","p-2","px-3",3,"click"],[1,"fall-item","fall-effect","d-flex","justify-content-center","pe-3"],["src","/assets/images/landing-page/sponsar.png",1,"box-shadow-img-3","img-mobile"],[1,"ps-4","text-start"],[1,"fs-22"],["type","button",1,"btn","btn-light","blue","fw-600","p-2","px-3",3,"click"],[1,"about-us","fs-12","mb-5"],[1,"section-header"],[1,"d-flex","py-4"],[1,"col-2"],[1,"icon"],[1,"col-8"],["target","_blank",1,"d-blue",3,"href"],[1,"text-start"]],template:function(e,t){1&e&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"div",2),n.TgZ(3,"div",3),n.TgZ(4,"div",4),n._UZ(5,"button",5),n._UZ(6,"button",6),n._UZ(7,"button",7),n._UZ(8,"button",8),n._UZ(9,"button",9),n.qZA(),n.TgZ(10,"div",10),n.TgZ(11,"div",11),n._UZ(12,"img",12),n.qZA(),n.TgZ(13,"div",13),n._UZ(14,"img",14),n.qZA(),n.TgZ(15,"div",13),n._UZ(16,"img",15),n.qZA(),n.TgZ(17,"div",13),n._UZ(18,"img",16),n.qZA(),n.TgZ(19,"div",13),n._UZ(20,"img",17),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(21,"div",18),n.TgZ(22,"section",19),n.TgZ(23,"div",20),n.TgZ(24,"div",21),n.TgZ(25,"div",22),n.TgZ(26,"div",23),n._UZ(27,"img",24),n.TgZ(28,"span"),n._uU(29),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(30,"marquee",25),n.TgZ(31,"ul",26),n.YNc(32,f,13,10,"li",27),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(33,"div",28),n.TgZ(34,"div",29),n.TgZ(35,"div",30),n.NdJ("click",function(){return t.chooseType("courses",t.lang.language.courses)}),n.TgZ(36,"div",31),n._uU(37),n.qZA(),n.TgZ(38,"div",32),n.TgZ(39,"div",33),n._UZ(40,"img",34),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(41,"div",29),n.TgZ(42,"div",35),n.NdJ("click",function(){return t.chooseType("colleges",t.lang.language.colleges)}),n.TgZ(43,"div",31),n._uU(44),n.qZA(),n.TgZ(45,"div",36),n.TgZ(46,"div",33),n._UZ(47,"img",37),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(48,"div",29),n.TgZ(49,"div",38),n.NdJ("click",function(){return t.chooseType("exams",t.lang.language.entranceExam)}),n.TgZ(50,"div",39),n._uU(51),n.qZA(),n.TgZ(52,"div",40),n.TgZ(53,"div",33),n._UZ(54,"img",41),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(55,"div",29),n.TgZ(56,"div",42),n.NdJ("click",function(){return t.chooseType("scholarships",t.lang.language.scholarships)}),n.TgZ(57,"div",31),n._uU(58),n.qZA(),n.TgZ(59,"div",43),n.TgZ(60,"div",33),n._UZ(61,"img",44),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(62,"div",29),n.TgZ(63,"div",45),n.NdJ("click",function(){return t.moveToLoans()}),n.TgZ(64,"div",31),n._uU(65),n.qZA(),n.TgZ(66,"div",46),n.TgZ(67,"div",33),n._UZ(68,"img",47),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(69,"div",29),n.TgZ(70,"div",48),n.NdJ("click",function(){return t.chooseType("careers",t.lang.language.careers)}),n.TgZ(71,"div",31),n._uU(72),n.qZA(),n.TgZ(73,"div",49),n.TgZ(74,"div",33),n._UZ(75,"img",50),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(76,"div",51),n.TgZ(77,"section",52),n.TgZ(78,"div",53),n.TgZ(79,"div",54),n._UZ(80,"img",55),n.TgZ(81,"h1",56),n._uU(82,"10,73,000 +"),n.qZA(),n.qZA(),n.TgZ(83,"div",57),n._UZ(84,"span",58),n.TgZ(85,"p",59),n._uU(86),n._UZ(87,"br"),n._uU(88),n.qZA(),n._UZ(89,"span",60),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(90,"section",61),n.TgZ(91,"div",20),n.TgZ(92,"div",1),n.TgZ(93,"div",62),n.TgZ(94,"div",63),n._UZ(95,"img",64),n.TgZ(96,"div",65),n.TgZ(97,"div",66),n.YNc(98,m,5,2,"div",67),n.YNc(99,u,5,2,"div",67),n.qZA(),n.TgZ(100,"div",68),n.TgZ(101,"button",69),n.NdJ("click",function(){return t.moveToRegistration("mentor-form")}),n._uU(102),n._UZ(103,"i",70),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(104,"div",62),n.TgZ(105,"div",71),n._UZ(106,"img",72),n.TgZ(107,"div",65),n.TgZ(108,"div",66),n.YNc(109,h,5,2,"div",67),n.YNc(110,b,5,2,"div",67),n.qZA(),n.TgZ(111,"div",68),n.TgZ(112,"button",73),n.NdJ("click",function(){return t.moveToRegistration("sponsor-form")}),n._uU(113),n._UZ(114,"i",70),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(115,"div",62),n.TgZ(116,"div",74),n._UZ(117,"img",75),n.TgZ(118,"div",65),n.TgZ(119,"div",66),n.TgZ(120,"div",76),n.TgZ(121,"h3"),n._uU(122),n.qZA(),n.TgZ(123,"div",77),n._uU(124),n.qZA(),n.qZA(),n.qZA(),n.TgZ(125,"div",68),n.TgZ(126,"button",78),n.NdJ("click",function(){return t.moveToRegistration("scholarship-form")}),n._uU(127),n._UZ(128,"i",70),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(129,"section",79),n.TgZ(130,"div",20),n.TgZ(131,"div",21),n.TgZ(132,"h3",80),n._uU(133),n.qZA(),n.qZA(),n.TgZ(134,"div",57),n._UZ(135,"span",58),n.TgZ(136,"p"),n._uU(137),n.qZA(),n._UZ(138,"br"),n.TgZ(139,"p"),n._uU(140),n.qZA(),n._UZ(141,"span",60),n.qZA(),n.qZA(),n.qZA()),2&e&&(n.xp6(29),n.hij(" ",t.lang.language.whatNew,""),n.xp6(3),n.Q6J("ngForOf",t.examsNotifications),n.xp6(3),n.Q6J("ngClass","courses"==t.section?" card-banner-courses cards-hover-courses":""),n.xp6(2),n.Oqu(t.lang.language.courses),n.xp6(5),n.Q6J("ngClass","colleges"==t.section?"cards-hover cards-hover-colleges":""),n.xp6(2),n.Oqu(t.lang.language.colleges),n.xp6(5),n.Q6J("ngClass","exams"==t.section?"cards-hover cards-hover-exam":""),n.xp6(2),n.Oqu(t.lang.language.entranceExam),n.xp6(5),n.Q6J("ngClass","scholarships"==t.section?"cards-hover cards-hover-scholarships":""),n.xp6(2),n.Oqu(t.lang.language.scholarships),n.xp6(5),n.Q6J("ngClass","educationLoans"==t.section?"cards-hover cards-hover-loans text-white":""),n.xp6(2),n.Oqu(t.lang.language.educationLoans),n.xp6(5),n.Q6J("ngClass","careers"==t.section?"cards-hover cards-hover-careers":""),n.xp6(2),n.Oqu(t.lang.language.careers),n.xp6(14),n.hij(" ",t.lang.language.countText," "),n.xp6(2),n.hij(" ",t.lang.language.countText2," "),n.xp6(10),n.Q6J("ngIf",t.lang.type),n.xp6(1),n.Q6J("ngIf",!t.lang.type),n.xp6(3),n.hij("",t.lang.language.signup," "),n.xp6(7),n.Q6J("ngIf",t.lang.type),n.xp6(1),n.Q6J("ngIf",!t.lang.type),n.xp6(3),n.hij("",t.lang.language.signup," "),n.xp6(9),n.Oqu(t.lang.language.beScholarship),n.xp6(2),n.Oqu(t.lang.language.subTextScholarship),n.xp6(3),n.hij("",t.lang.language.signup," "),n.xp6(6),n.hij(" ",t.lang.language.aboutVazhikaatti," "),n.xp6(4),n.hij(" ",t.lang.language.aboutVazhikaattiContent," "),n.xp6(3),n.hij(" ",t.lang.language.aboutVazhikaattiContent2," "))},directives:[g.sg,g.mk,g.O5],pipes:[g.uU],styles:['@import"https://fonts.googleapis.com/css2?family=Mukta+Malar:wght@800";html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{height:100%}*[_ngcontent-%COMP%], [_ngcontent-%COMP%]:before, [_ngcontent-%COMP%]:after{box-sizing:border-box}[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}body[_ngcontent-%COMP%]{font-family:Roboto;font-style:normal;font-weight:400;transition:.5s}.mat-body[_ngcontent-%COMP%], .mat-body-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]{font-family:Roboto;font-style:normal}a[_ngcontent-%COMP%]{cursor:pointer;color:#fff;text-decoration:none}section[_ngcontent-%COMP%]{padding:20px 0;overflow:hidden;background:#fffefa}section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]{text-align:center;font-family:Roboto;font-style:normal;font-weight:800;font-size:1.5rem;line-height:1;color:#05396b;position:relative;display:inherit;margin-bottom:3rem}section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]:after{content:"";background:#379683;height:.25rem;width:100%;position:absolute;bottom:0;left:0;top:2.5rem}.center-flex[_ngcontent-%COMP%]{align-items:center;display:flex}.d-blue[_ngcontent-%COMP%]{color:#042d56}.d-green[_ngcontent-%COMP%]{color:#379683}.l-green[_ngcontent-%COMP%]{color:#5cdb95}.grey[_ngcontent-%COMP%], .d-grey[_ngcontent-%COMP%]{color:#b5b5b5}.cursor-pointer[_ngcontent-%COMP%]{cursor:pointer}.fs-30[_ngcontent-%COMP%]{font-size:30px}.fs-24[_ngcontent-%COMP%]{font-size:42px}.fs-23[_ngcontent-%COMP%]{font-size:23px!important}.fs-22[_ngcontent-%COMP%]{font-size:22px}.coming-soon[_ngcontent-%COMP%]{width:100vw;height:100vh}.mt-2rem[_ngcontent-%COMP%]{margin-top:2rem}.mt-4rem[_ngcontent-%COMP%]{margin-top:4rem}.br-20[_ngcontent-%COMP%]{border-radius:20px}.expired[_ngcontent-%COMP%]{background-color:#c4cfc9;color:#fff;line-height:1.2}.apply-now[_ngcontent-%COMP%]{background-color:#3aa86b;color:#fff;line-height:1.2}.apply-now[_ngcontent-%COMP%]:hover{background-color:#fff;color:#3aa86b;border:1px solid blue}.fs-29[_ngcontent-%COMP%]{font-size:26px}.fs-28[_ngcontent-%COMP%]{font-size:28px!important}.fs-26[_ngcontent-%COMP%]{font-size:26px!important}.fs-22[_ngcontent-%COMP%]{font-size:22px!important}.fw-500[_ngcontent-%COMP%]{font-weight:500}.fw-600[_ngcontent-%COMP%]{font-weight:600!important}.badge-1[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:130px}.badge-2[_ngcontent-%COMP%], .badge-3[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:120px}@media only screen and (min-width: 600px){.d-block-2[_ngcontent-%COMP%]{display:none!important}}@media only screen and (min-width: 600px) and (max-width: 1130px){.mobile-dd[_ngcontent-%COMP%]{margin-left:94vw!important}}@media only screen and (min-width: 1200px) and (max-width: 1290px){.mobile-dd[_ngcontent-%COMP%]{margin-left:94vw!important}}@media only screen and (max-width: 600px){.fs-24[_ngcontent-%COMP%]{font-size:22px}.mt-4rem[_ngcontent-%COMP%]{margin-top:6rem!important}.mt-5rem[_ngcontent-%COMP%]{margin-top:5rem!important}.fs-29[_ngcontent-%COMP%]{font-size:14px!important}.mobile-dd[_ngcontent-%COMP%]{margin-left:90vw!important}.badge-ellipse[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;width:33vw}.head-overflow[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;width:85vw;white-space:nowrap}.d-block-1[_ngcontent-%COMP%]{display:none!important}}.fs-14[_ngcontent-%COMP%]{font-size:14px!important}.fs-15[_ngcontent-%COMP%]{font-size:15px!important}.fs-16[_ngcontent-%COMP%]{font-size:14px!important}.fs-13[_ngcontent-%COMP%]{font-size:13px!important}.fs-12[_ngcontent-%COMP%]{font-size:12px!important}.fs-26[_ngcontent-%COMP%]{font-size:26px!important}p[_ngcontent-%COMP%]{margin-bottom:0!important;font-size:16px!important}.fw-800[_ngcontent-%COMP%]{font-weight:800}.text-ellipsis[_ngcontent-%COMP%]{text-overflow:ellipsis;overflow:hidden;width:18vw;white-space:nowrap}.line-clamp[_ngcontent-%COMP%]{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.has-search[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{padding-left:2.375rem}.has-search[_ngcontent-%COMP%]   .form-control-feedback[_ngcontent-%COMP%]{position:absolute;z-index:2;display:block;width:2.375rem;height:2.375rem;line-height:2.375rem;text-align:center;pointer-events:none;color:#aaa}.no-data[_ngcontent-%COMP%]{font-size:18px;color:#e34848;font-weight:500}.pre-line[_ngcontent-%COMP%]{white-space:pre-line;text-indent:50px}.pre-line-1[_ngcontent-%COMP%]{white-space:pre-line}.head-overflow[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;width:85vw;white-space:nowrap}.fs-30[_ngcontent-%COMP%]{font-size:30px}.filter-box-scroll[_ngcontent-%COMP%]{height:25vh;overflow:hidden;overflow-y:scroll}.filter-box-scroll-big[_ngcontent-%COMP%]{height:50vh;overflow:hidden;overflow-y:scroll}input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.error-small-msg[_ngcontent-%COMP%]{color:red}.ellipse-oneline[_ngcontent-%COMP%]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.card-banner[_ngcontent-%COMP%]{margin:18px;border-radius:10px;border-color:#807e7e 1px solid;box-shadow:1px 5px 9px 5px #dfdede;border:1px solid #e0e0e0;background-size:200% 200%}.container[_ngcontent-%COMP%]{position:relative;padding:0}.centered[_ngcontent-%COMP%]{position:absolute;top:30%;left:55%;transform:translate(-50%,-50%);color:#fff}.bg-grey[_ngcontent-%COMP%]{background:#b5b5b5}.bg-l-grey[_ngcontent-%COMP%]{background:#c6d8ff}.cards-hover[_ngcontent-%COMP%]{box-shadow:0 2px 7px #747474;border:1px solid #4f22f1;color:#4f22f1;cursor:pointer}.card-exams[_ngcontent-%COMP%]{border-radius:15px;border-color:#a3a2a2 1px solid;box-shadow:4px 6px 8px #b3b0b0;border:1px solid #e0e0e0;background-color:#fff}.head-height[_ngcontent-%COMP%]{height:55px}.badge-1[_ngcontent-%COMP%]{background:#ff5652!important;font-weight:500}.badge-2[_ngcontent-%COMP%], .badge-3[_ngcontent-%COMP%]{background:#14a39a!important;font-weight:500;color:#fff}.badge-1[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:160px!important}.badge-2[_ngcontent-%COMP%], .badge-3[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:160px}.container[_ngcontent-%COMP%]{margin-top:5%}.scrollable-dropdown[_ngcontent-%COMP%]{height:auto;max-height:320px;overflow-x:hidden}.br-1[_ngcontent-%COMP%]{border-radius:10px!important;box-shadow:4px 6px 8px #b3b0b0!important;border:1px solid #d6d6d6!important}.banner[_ngcontent-%COMP%]{width:100%;height:150px}.maintxt[_ngcontent-%COMP%]{position:relative}.maintxt[_ngcontent-%COMP%] > img[_ngcontent-%COMP%], .overlay-text[_ngcontent-%COMP%]{position:absolute}.overlay-text[_ngcontent-%COMP%]{padding:150px 50px}.underline[_ngcontent-%COMP%]{text-decoration:underline;text-underline-offset:5px}.hover-text[_ngcontent-%COMP%]:hover{color:#042d56}.card_hover[_ngcontent-%COMP%]:hover{transition:transform .3s ease;transform:scale(1.05);cursor:pointer}.font-grey[_ngcontent-%COMP%]{color:#898c8d}.font-dark-grey[_ngcontent-%COMP%]{color:#14a39a}.card-footer[_ngcontent-%COMP%]{padding:.3rem 0rem!important;border-radius:0 0 9px 9px;background-color:#407bff;border-top:none!important}.card-banner[_ngcontent-%COMP%]:hover{color:#fff!important;background-position:0 100%;transition:background-position .7s,color .7s ease,border-color .7s ease}.text-white[_ngcontent-%COMP%]{color:#fff!important}.light-bg-course[_ngcontent-%COMP%]{background-color:#ffc6da}.card-banner-courses[_ngcontent-%COMP%]{color:#ff206e}.card-banner-courses[_ngcontent-%COMP%]:hover{background-image:linear-gradient(to top,#ff206e 50%,transparent 50%)}.cards-hover-courses[_ngcontent-%COMP%]{background-color:#ff206e;color:#fff!important}.light-bg-exams[_ngcontent-%COMP%]{background:#a7c1f8}.card-banner-exams[_ngcontent-%COMP%]{color:#407bff}.card-banner-exams[_ngcontent-%COMP%]:hover{background-image:linear-gradient(to top,#407bff 50%,transparent 50%)}.cards-hover-exam[_ngcontent-%COMP%]{background-color:#407bff;color:#fff!important}.light-bg-college[_ngcontent-%COMP%]{background:#9afdd4}.card-banner-college[_ngcontent-%COMP%]{color:#17c079}.card-banner-college[_ngcontent-%COMP%]:hover{background-image:linear-gradient(to top,#17c079 50%,transparent 50%)}.cards-hover-colleges[_ngcontent-%COMP%]{background-color:#17c079;color:#fff!important}.light-bg-scholarships[_ngcontent-%COMP%]{background:#f8f3ad}.card-banner-scholarships[_ngcontent-%COMP%]{color:#f0e100}.card-banner-scholarships[_ngcontent-%COMP%]:hover{background-image:linear-gradient(to top,#f0e100 50%,transparent 50%)}.cards-hover-scholarships[_ngcontent-%COMP%]{background-color:#f0e100;color:#fff!important}.light-bg-careers[_ngcontent-%COMP%]{background:#a8e1fa}.card-banner-careers[_ngcontent-%COMP%]{color:#55b5dd}.card-banner-careers[_ngcontent-%COMP%]:hover{background-image:linear-gradient(to top,#55b5dd 50%,transparent 50%)}.cards-hover-careers[_ngcontent-%COMP%]{background-color:#55b5dd;color:#fff!important}.card-banner-loans[_ngcontent-%COMP%]{color:#407bff}.card-banner-loans[_ngcontent-%COMP%]:hover{background-image:linear-gradient(to top,#896a98 50%,transparent 50%);color:#407bff}.cards-hover-loans[_ngcontent-%COMP%]{background-color:#896a98;color:#fff!important}.icon-up[_ngcontent-%COMP%]{height:24px;position:relative;bottom:28px}.bg-color-exams[_ngcontent-%COMP%]{background-color:#407bff}.font-exams[_ngcontent-%COMP%]{color:#407bff}.bg-color-college[_ngcontent-%COMP%]{background-color:#17c079}.font-colleges[_ngcontent-%COMP%]{color:#17c079}.bg-color-careers[_ngcontent-%COMP%]{background-color:#55b5dd}.font-careers[_ngcontent-%COMP%]{color:#55b5dd}.bg-color-loan[_ngcontent-%COMP%]{background-color:#896a98}.font-loans[_ngcontent-%COMP%]{color:#896a98}.bg-color-courses[_ngcontent-%COMP%]{background-color:#ff206e}.font-courses[_ngcontent-%COMP%]{color:#ff206e}.bg-color-scholarships[_ngcontent-%COMP%]{background-color:#f0e100}.font-scholarships[_ngcontent-%COMP%]{color:#f0e100}.about-us[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]{position:relative}.about-us[_ngcontent-%COMP%]   .top-ornament[_ngcontent-%COMP%]{background:url(about-us-ornament-bottom.017626da1f47df65.png);position:absolute;width:150px;height:115px;opacity:.7;top:-35px;background-size:120px;background-repeat:no-repeat}.about-us[_ngcontent-%COMP%]   .bottom-ornament[_ngcontent-%COMP%]{background:url(about-us-ornament-bottom.017626da1f47df65.png);position:absolute;width:150px;height:115px;opacity:.7;right:0;bottom:-35px;background-size:120px;background-repeat:no-repeat}.about-us[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem!important;font-style:italic;font-weight:500;text-indent:5%;line-height:1.9;position:inherit}.without-text[_ngcontent-%COMP%]{width:50%;position:absolute;right:50px;top:130px}#container[_ngcontent-%COMP%]{position:relative;text-align:center}.centered-text-landing[_ngcontent-%COMP%]{position:absolute;width:40%;top:73%;left:72%;transform:translate(-50%,-50%);height:280px}#img2[_ngcontent-%COMP%]{position:absolute;left:50px;top:104px;height:70%;width:50%}.about-us-counts[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]{position:relative}.about-us-counts[_ngcontent-%COMP%]   .top-ornament[_ngcontent-%COMP%]{background:url(right-dots.c92e3252b9f57628.png);position:absolute;width:80px;height:115px;opacity:.4;top:-70px;background-size:70px;background-repeat:no-repeat}.about-us-counts[_ngcontent-%COMP%]   .bottom-ornament[_ngcontent-%COMP%]{background:url(left-dots.18df9fced802a9d6.png);position:absolute;width:72px;height:145px;opacity:.4;right:0;bottom:-40px;background-size:70px;background-repeat:no-repeat}.count-students[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;color:#14a39a}.letter-spacing-1px[_ngcontent-%COMP%]{letter-spacing:1px}.scholar-section[_ngcontent-%COMP%]{background:#305fc9;color:#fff}.box-shadow-img-1[_ngcontent-%COMP%]{box-shadow:20px 20px #ff8533}.box-shadow-img-2[_ngcontent-%COMP%]{box-shadow:20px 20px #36ad6c}.box-shadow-img-3[_ngcontent-%COMP%]{box-shadow:20px 20px #305fc9}.btn-light[_ngcontent-%COMP%]{color:#305fc9}.orange[_ngcontent-%COMP%]{background:#ff8533!important;color:#fff}.green[_ngcontent-%COMP%]{background:#36ad6c!important;color:#fff}.blue[_ngcontent-%COMP%]{background:#305fc9!important;color:#fff}.d-grid[_ngcontent-%COMP%]{left:44vw;position:absolute;margin-top:50px;width:50%}.dot-line[_ngcontent-%COMP%]{left:14%;position:relative;top:20px}.register-btn[_ngcontent-%COMP%]{left:50px;position:relative}p[_ngcontent-%COMP%]{font-style:normal!important}.img-mobile[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;height:385px;width:100%}@media only screen and (max-width: 600px){.carousel-res[_ngcontent-%COMP%]{height:47vh!important}.margin-top-25[_ngcontent-%COMP%]{margin-top:25%}.d-grid[_ngcontent-%COMP%]{left:0;position:inherit;margin-top:32px;width:100%}.fs-22[_ngcontent-%COMP%]{font-size:16px!important}.img-mobile[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;height:82vw;width:100%}.fall-item[_ngcontent-%COMP%]{width:99%!important}.banner-mobile[_ngcontent-%COMP%]{width:100%;height:300px}.without-text[_ngcontent-%COMP%]{width:100%;position:relative}.centered-text-landing[_ngcontent-%COMP%]{position:absolute;top:65%;left:50%;transform:translate(-50%,-50%);height:450px}#img2[_ngcontent-%COMP%]{position:relative;width:100%!important;height:70%;left:0%}.justify-content-end-card[_ngcontent-%COMP%]{justify-content:center!important}.left-160[_ngcontent-%COMP%]{left:60px!important}}.justify-content-end-card[_ngcontent-%COMP%]{justify-content:end}.hover-center-1[_ngcontent-%COMP%]{position:absolute;top:25%;color:#fff}.hover-center-2[_ngcontent-%COMP%]{position:absolute;top:65%;color:#fff}.fall-item[_ngcontent-%COMP%]{width:90%;height:auto;overflow:hidden;position:relative;text-align:center}.fall-item[_ngcontent-%COMP%]   .mask[_ngcontent-%COMP%], .fall-item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;overflow:hidden;top:0;left:0}.fall-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;position:relative;width:100%;height:285px}.fall-item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-transform:uppercase;color:#fff;text-align:center;position:relative;padding:10px;background:rgba(0,0,0,.8);margin:0}.fall-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-style:italic;position:relative;color:#fff;padding:10px 20px 20px;text-align:center}.fall-effect[_ngcontent-%COMP%]   .mask[_ngcontent-%COMP%]{background-color:#000000b3;top:-200px;-ms-filter:"progid: DXImageTransform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);opacity:0;transition:all .3s ease-out .5s}.fall-effect[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{transform:translateY(-200px);transition:all .2s ease-in-out .1s}.fall-effect[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#333;transform:translateY(-200px);transition:all .2s ease-in-out .2s}.fall-effect[_ngcontent-%COMP%]   a.btn[_ngcontent-%COMP%]{transform:translateY(-200px);transition:all .2s ease-in-out .3s}.fall-effect[_ngcontent-%COMP%]:hover   .mask[_ngcontent-%COMP%]{-ms-filter:"progid: DXImageTransform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);opacity:1;top:0px;transition-delay:0s}.fall-effect[_ngcontent-%COMP%]:hover   h2[_ngcontent-%COMP%]{transform:translateY(0);transition-delay:.4s}.fall-effect[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%]{transform:translateY(0);transition-delay:.2s}.fall-effect[_ngcontent-%COMP%]:hover   a.btn[_ngcontent-%COMP%]{transform:translateY(0);transition-delay:0s}@media only screen and (min-device-width: 768px) and (max-device-width: 1024px){.centered-text-landing[_ngcontent-%COMP%]{top:90%}}.mt-6[_ngcontent-%COMP%]{margin-top:5.3%}.carousel-indicators[_ngcontent-%COMP%]{bottom:10px;margin-bottom:unset}time.icon[_ngcontent-%COMP%]{font-size:1em;display:block;position:relative;width:3em;height:3em;background-color:#fff;overflow:hidden}time.icon[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{position:absolute;top:0;font-size:.75em;color:#fff;background-color:#2889fe}time.icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.25em;letter-spacing:-.05em;padding-top:.8em;background-color:#dadada;color:#2b2b2b}time.icon[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{display:block;width:100%;font-weight:700;font-style:normal;text-align:center}.h-100[_ngcontent-%COMP%]{height:50%}.carousel-res[_ngcontent-%COMP%]{height:400px}']}),o})()}];let C=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[[c.Bz.forChild(_)],c.Bz]}),o})();var x=r(9642);let O=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[[g.ez,c.Bz,x.x,l.bB.forRoot(),C]]}),o})()}}]);