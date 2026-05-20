module.exports=[446786,(e,t,r)=>{t.exports=e.x("os",()=>require("os"))},427699,(e,t,r)=>{t.exports=e.x("events",()=>require("events"))},814747,(e,t,r)=>{t.exports=e.x("path",()=>require("path"))},522734,(e,t,r)=>{t.exports=e.x("fs",()=>require("fs"))},792509,(e,t,r)=>{t.exports=e.x("url",()=>require("url"))},921517,(e,t,r)=>{t.exports=e.x("http",()=>require("http"))},524836,(e,t,r)=>{t.exports=e.x("https",()=>require("https"))},406461,(e,t,r)=>{t.exports=e.x("zlib",()=>require("zlib"))},918622,(e,t,r)=>{t.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},556704,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},832319,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},324725,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},224361,(e,t,r)=>{t.exports=e.x("util",()=>require("util"))},518041,e=>{"use strict";var t=e.i(926046);let r=new t.default.Schema({name:{type:String,required:[!0,"Branch name is required"],trim:!0},code:{type:String,required:[!0,"Branch code is required"],unique:!0,uppercase:!0,trim:!0},address:{street:String,city:String,state:String,zipCode:String,country:String},contact:{phone:String,email:String},location:{latitude:Number,longitude:Number,address:String},bankAccounts:[{accountTitle:String,serviceName:String,accountNo:String,iban:String,isDefault:{type:Boolean,default:!1}}],admin:{type:t.default.Schema.Types.ObjectId,ref:"User",default:null},status:{type:String,enum:["active","inactive"],default:"active"},settings:{type:Map,of:t.default.Schema.Types.Mixed,default:{}}},{timestamps:!0}),a=t.default.models.Branch||t.default.model("Branch",r);e.s(["default",0,a])},270406,(e,t,r)=>{t.exports=e.x("next/dist/compiled/@opentelemetry/api",()=>require("next/dist/compiled/@opentelemetry/api"))},193695,(e,t,r)=>{t.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},926046,(e,t,r)=>{t.exports=e.x("mongoose",()=>require("mongoose"))},300794,(e,t,r)=>{t.exports=e.x("node:dns/promises",()=>require("node:dns/promises"))},87170,e=>{"use strict";var t=e.i(300794),r=e.i(926046);t.default.setServers(["8.8.8.8","8.8.4.4"]);let a=process.env.MONGODB_URI,s="true"!==process.env.ENABLE_REAL_DB||!a,i=e.g.mongoose;async function n(){if(s)return null;if(i.conn)return i.conn;i.promise||(i.promise=r.default.connect(a,{bufferCommands:!1}).then(e=>(console.log("✅ MongoDB connected successfully"),e)));try{i.conn=await i.promise}catch(e){throw i.promise=null,e}return i.conn}function d(){return s}i||(i=e.g.mongoose={conn:null,promise:null}),e.s(["default",0,n,"isMockMode",()=>d])},254799,(e,t,r)=>{t.exports=e.x("crypto",()=>require("crypto"))},688947,(e,t,r)=>{t.exports=e.x("stream",()=>require("stream"))},500874,(e,t,r)=>{t.exports=e.x("buffer",()=>require("buffer"))},482143,e=>{"use strict";var t=e.i(926046);let r=new t.default.Schema({name:{type:String,required:!0,trim:!0},gradeNumber:{type:Number},levelId:{type:t.default.Schema.Types.ObjectId,ref:"Level"},code:{type:String,trim:!0},academicYear:{type:t.default.Schema.Types.ObjectId,ref:"AcademicYear"},description:String,createdBy:{type:t.default.Schema.Types.ObjectId,ref:"User"},updatedBy:{type:t.default.Schema.Types.ObjectId,ref:"User"}},{timestamps:!0});r.index({levelId:1}),r.index({gradeNumber:1});let a=t.default.models.Grade||t.default.model("Grade",r);e.s(["default",0,a])},979982,e=>{"use strict";var t=e.i(926046);e.i(482143);let r=new t.default.Schema({name:{type:String,required:[!0,"Class name is required"],trim:!0},code:{type:String,required:[!0,"Class code is required"],unique:!0,uppercase:!0,trim:!0},grade:{type:t.default.Schema.Types.ObjectId,ref:"Grade",required:[!0,"Grade is required"]},sections:[{name:{type:String,required:!0,trim:!0},capacity:{type:Number,default:40,min:1},classTeacherId:{type:t.default.Schema.Types.ObjectId,ref:"User"},roomNumber:{type:String,trim:!0}}],branchId:{type:t.default.Schema.Types.ObjectId,ref:"Branch",required:[!0,"Branch is required"]},academicYear:{type:t.default.Schema.Types.ObjectId,ref:"AcademicYear",required:[!0,"Academic year is required"]},subjects:[{type:t.default.Schema.Types.ObjectId,ref:"Subject"}],feeTemplates:[{type:t.default.Schema.Types.ObjectId,ref:"FeeTemplate"}],description:{type:String,trim:!0},status:{type:String,enum:["active","inactive","archived"],default:"active"},createdBy:{type:t.default.Schema.Types.ObjectId,ref:"User"},updatedBy:{type:t.default.Schema.Types.ObjectId,ref:"User"}},{timestamps:!0});r.index({branchId:1}),r.index({academicYear:1}),r.index({grade:1});let a=t.default.models.Class||t.default.model("Class",r);e.s(["default",0,a])},884118,e=>{"use strict";var t=e.i(926046);e.i(482143);let r=new t.default.Schema({name:{type:String,required:!0,trim:!0},code:{type:String,required:!0,unique:!0,uppercase:!0,trim:!0},description:String,classId:{type:t.default.Schema.Types.ObjectId,ref:"Class",required:!0},grade:{type:Number},gradeId:{type:t.default.Schema.Types.ObjectId,ref:"Grade"},subjectType:{type:String,enum:["core","elective","co-curricular","skill-based"],default:"core"},hoursPerWeek:{type:Number,default:5},totalHoursPerYear:{type:Number,default:150},creditHours:{type:Number,default:3},departmentId:{type:t.default.Schema.Types.ObjectId,ref:"Department"},headTeacherId:{type:t.default.Schema.Types.ObjectId,ref:"User"},teachers:[{type:t.default.Schema.Types.ObjectId,ref:"User"}],assessmentPattern:{continuousAssessment:{type:Number,default:20},midTerm:{type:Number,default:30},finalExam:{type:Number,default:50},projects:{type:Number,default:0},practical:{type:Number,default:0}},learningOutcomes:[{outcome:String,description:String}],prerequisites:[{type:t.default.Schema.Types.ObjectId,ref:"Subject"}],resources:{textbooks:[String],referenceBooks:[String],onlineResources:[String],labEquipment:[String]},status:{type:String,enum:["active","inactive","archived"],default:"active"},createdBy:{type:t.default.Schema.Types.ObjectId,ref:"User"},updatedBy:{type:t.default.Schema.Types.ObjectId,ref:"User"}},{timestamps:!0});r.index({classId:1}),r.index({grade:1}),r.index({status:1}),r.pre("save",async function(e){if(!this.code){let e=this.grade||void 0,t=e?`G${e}`:"G0",r=(this.name||"").substring(0,3).toUpperCase(),a=e?await this.constructor.countDocuments({grade:e}):await this.constructor.countDocuments();this.code=`${t}-${r}-${String(a+1).padStart(2,"0")}`}e()}),r.set("toJSON",{virtuals:!0}),r.set("toObject",{virtuals:!0});let a=t.default.models.Subject||t.default.model("Subject",r);e.s(["default",0,a])},504446,(e,t,r)=>{t.exports=e.x("net",()=>require("net"))},168914,e=>{"use strict";var t=e.i(926046);let r=new t.default.Schema({name:{type:String,required:!0,trim:!0},code:{type:String,required:!0,unique:!0,uppercase:!0,trim:!0},description:String,headTeacherId:{type:t.default.Schema.Types.ObjectId,ref:"User"},branchId:{type:t.default.Schema.Types.ObjectId,ref:"Branch",required:!0},teachers:[{type:t.default.Schema.Types.ObjectId,ref:"User"}],subjects:[{type:t.default.Schema.Types.ObjectId,ref:"Subject"}],officeLocation:String,officeHours:String,budget:{allocatedAmount:{type:Number,default:0},spentAmount:{type:Number,default:0},year:Number},academicYears:[String],programsOffered:[String],classrooms:Number,labRooms:Number,librarySection:String,specialFacilities:[String],departmentGoals:[String],achievements:[{title:String,date:Date,description:String}],hod:{name:String,office:String},status:{type:String,enum:["active","inactive","archived"],default:"active"},remarks:String,createdBy:{type:t.default.Schema.Types.ObjectId,ref:"User"},updatedBy:{type:t.default.Schema.Types.ObjectId,ref:"User"}},{timestamps:!0});r.index({code:1}),r.index({branchId:1}),r.index({headTeacherId:1}),r.index({status:1}),r.set("toJSON",{virtuals:!0}),r.set("toObject",{virtuals:!0});let a=t.default.models.Department||t.default.model("Department",r);e.s(["default",0,a])},391599,e=>{"use strict";e.s(["getAdminEmailTemplate",0,(e,t,r="Ease Academy")=>{let a=`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #333;
    line-height: 1.6;
  `,s=`
    background: linear-gradient(135deg, #2b7a78 0%, #1f8a70 100%);
    color: white;
    padding: 28px;
    text-align: center;
    border-radius: 8px 8px 0 0;
  `,i=`
    max-width: 600px;
    margin: 0 auto;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  `,n=`
    padding: 26px;
    background: #f9f9f9;
  `,d=`
    background: white;
    padding: 18px;
    border-radius: 4px;
    margin: 16px 0;
    border-left: 4px solid #2b7a78;
  `,o=`
    background: #f0f0f0;
    padding: 18px;
    text-align: center;
    font-size: 12px;
    color: #666;
    border-top: 1px solid #ddd;
  `,l=`
    <div style="${d}">
      <h4 style="margin-top: 0; color: #2b7a78;">Administrator Information</h4>
      <table style="width:100%; font-size:14px;">
        <tr>
          <td style="padding:6px 0; font-weight:bold; width:40%;">Name:</td>
          <td style="padding:6px 0;">${t.fullName||`${t.firstName||""} ${t.lastName||""}`.trim()}</td>
        </tr>
        <tr>
          <td style="padding:6px 0; font-weight:bold;">Role:</td>
          <td style="padding:6px 0;">${t.role||"Administrator"}</td>
        </tr>
        <tr>
          <td style="padding:6px 0; font-weight:bold;">Email:</td>
          <td style="padding:6px 0;">${t.email||"N/A"}</td>
        </tr>
        <tr>
          <td style="padding:6px 0; font-weight:bold;">Phone:</td>
          <td style="padding:6px 0;">${t.phone||"N/A"}</td>
        </tr>
        <tr>
          <td style="padding:6px 0; font-weight:bold;">Branch:</td>
          <td style="padding:6px 0;">${t.branchId?.name||"N/A"}</td>
        </tr>
      </table>
    </div>
  `;if("ADMIN_CREATED"===e)return`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { ${a} }
          .container { ${i} }
          .header { ${s} }
          .content { ${n} }
          .details { ${d} }
          .footer { ${o} }
          .success { background:#e6fffa; color:#065f46; padding:10px 14px; border-radius:4px; margin:12px 0; border:1px solid #b7f5e6; font-weight:600; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 style="margin:0; font-size:26px;">🛡️ ${r}</h2>
            <p style="margin:8px 0 0 0; font-size:14px;">Administrator Account Created</p>
          </div>
          <div class="content">
            <p style="margin-top:0; font-size:16px; font-weight:500;">Hello ${t.firstName||t.fullName||""},</p>
            <div class="success">✅ Your administrator account has been created successfully.</div>

            ${l}

            <div style="${d}">
              <h4 style="margin-top:0; color:#2b7a78;">Login Credentials</h4>
              <table style="width:100%; font-size:14px;">
                <tr>
                  <td style="padding:6px 0; font-weight:bold; width:40%;">Email/Username:</td>
                  <td style="padding:6px 0;">${t.email}</td>
                </tr>
                <tr>
                  <td style="padding:6px 0; font-weight:bold;">Temporary Password:</td>
                  <td style="padding:6px 0; background:#fff3cd; padding:6px; border-radius:4px;">${t.tempPassword||"Admin@123"}</td>
                </tr>
              </table>
              <p style="margin:12px 0 0 0; font-size:13px; color:#555;">Please change your password after the first login for security.</p>
            </div>

            <div style="margin-top:14px;">
              <h4 style="margin:0 0 6px 0; color:#2b7a78;">Assigned Permissions</h4>
              <p style="margin:0; font-size:14px;">${(t.adminProfile?.permissions||t.permissions||[]).length?(t.adminProfile?.permissions||t.permissions).join(", "):"No permissions assigned"}</p>
            </div>

            <p style="margin:18px 0 0 0; color:#666; font-size:14px;">If you have any questions, contact the school administration.</p>

            <p style="margin:20px 0 0 0;">Best regards,<br><strong>${r} Administration</strong></p>
          </div>
          <div class="footer">
            <p style="margin:0;">This is an automated email. Please do not reply to this message.</p>
            <p style="margin:6px 0 0 0;">&copy; ${new Date().getFullYear()} ${r}. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;if("ADMIN_UPDATED"===e)return`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { ${a} }
          .container { ${i} }
          .header { ${s} }
          .content { ${n} }
          .details { ${d} }
          .footer { ${o} }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 style="margin:0; font-size:26px;">📝 ${r}</h2>
            <p style="margin:8px 0 0 0; font-size:14px;">Administrator Profile Updated</p>
          </div>
          <div class="content">
            <p style="margin-top:0; font-size:16px; font-weight:500;">Hello ${t.firstName||t.fullName||""},</p>
            <p>Your administrator profile has been updated. Please review the details below.</p>

            ${l}

            <p style="margin:18px 0 0 0; color:#666; font-size:14px;">If you did not request this change, please contact the administration immediately.</p>

            <p style="margin:20px 0 0 0;">Best regards,<br><strong>${r} Administration</strong></p>
          </div>
          <div class="footer">
            <p style="margin:0;">This is an automated email. Please do not reply to this message.</p>
            <p style="margin:6px 0 0 0;">&copy; ${new Date().getFullYear()} ${r}. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;if("ADMIN_STATUS_CHANGED"===e){let e={active:{color:"#27ae60",icon:"✅",label:"ACTIVE",bg:"#d4f8e8"},inactive:{color:"#e74c3c",icon:"⛔",label:"INACTIVE",bg:"#fdecea"},suspended:{color:"#f39c12",icon:"⏸️",label:"SUSPENDED",bg:"#fff6e6"}},p=e[t.status]||e.active;return`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { ${a} }
          .container { ${i} }
          .header { ${s} }
          .content { ${n} }
          .details { ${d} }
          .footer { ${o} }
          .status-badge { background: ${p.bg}; color: ${p.color}; padding:12px 16px; border-radius:6px; display:inline-block; margin:12px 0; border:1px solid ${p.color}; font-weight:700; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 style="margin:0; font-size:26px;">🔔 ${r}</h2>
            <p style="margin:8px 0 0 0; font-size:14px;">Account Status Update</p>
          </div>
          <div class="content">
            <p style="margin-top:0; font-size:16px; font-weight:500;">Hello ${t.firstName||t.fullName||""},</p>
            <div class="status-badge">${p.icon} ${p.label}</div>

            ${l}

            <p style="margin:18px 0 0 0; color:#666; font-size:14px;">If you have any questions or believe this is a mistake, contact the administration.</p>

            <p style="margin:20px 0 0 0;">Best regards,<br><strong>${r} Administration</strong></p>
          </div>
          <div class="footer">
            <p style="margin:0;">This is an automated email. Please do not reply to this message.</p>
            <p style="margin:6px 0 0 0;">&copy; ${new Date().getFullYear()} ${r}. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `}return"ADMIN_PASSWORD_RESET"===e?`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { ${a} }
          .container { ${i} }
          .header { ${s} }
          .content { ${n} }
          .details { ${d} }
          .footer { ${o} }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 style="margin:0; font-size:26px;">🔑 ${r}</h2>
            <p style="margin:8px 0 0 0; font-size:14px;">Password Reset</p>
          </div>
          <div class="content">
            <p style="margin-top:0; font-size:16px; font-weight:500;">Hello ${t.firstName||t.fullName||""},</p>
            <p>Your password has been reset. Use the temporary password below to sign in and update your password immediately.</p>

            <div style="${d}">
              <h4 style="margin-top:0; color:#2b7a78;">Temporary Password</h4>
              <p style="background:#fff3cd; padding:8px; border-radius:4px; display:inline-block;">${t.tempPassword||"sent separately"}</p>
            </div>

            <p style="margin:18px 0 0 0; color:#666; font-size:14px;">If you did not request this reset, contact support immediately.</p>

            <p style="margin:20px 0 0 0;">Best regards,<br><strong>${r} Administration</strong></p>
          </div>
          <div class="footer">
            <p style="margin:0;">This is an automated email. Please do not reply to this message.</p>
            <p style="margin:6px 0 0 0;">&copy; ${new Date().getFullYear()} ${r}. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `:`<html><body><p>Hello ${t.firstName||t.fullName||""},</p><p>Your administrator record has been updated.</p></body></html>`}])},39427,e=>{"use strict";var t=e.i(747909),r=e.i(174017),a=e.i(996250),s=e.i(759756),i=e.i(561916),n=e.i(114444),d=e.i(837092),o=e.i(869741),l=e.i(316795),p=e.i(487718),c=e.i(995169),u=e.i(47587),m=e.i(666012),f=e.i(570101),h=e.i(626937),g=e.i(10372),y=e.i(193695);e.i(52474);var x=e.i(600220),b=e.i(89171),v=e.i(513637),S=e.i(722511);e.i(449632);var w=e.i(586312),I=e.i(391599);e.i(518041),e.i(168914),e.i(979982),e.i(884118);var $=e.i(87170);let N=(0,v.withAuth)(async(e,t,r)=>{try{await (0,$.default)();let{searchParams:t}=new URL(e.url),r=parseInt(t.get("page"))||1,a=parseInt(t.get("limit"))||50,s=(r-1)*a,i=t.get("role"),n=t.get("branchId"),d=t.get("departmentId"),o=t.get("classId"),l=t.get("status"),p=t.get("search")||"",c={};i&&(i.includes(",")?c.role={$in:i.split(",")}:c.role=i),n&&(c.branchId=n),l&&(c.status=l),"student"===i?(d&&(c["studentProfile.departmentId"]=d),o&&(c["studentProfile.classId"]=o)):"teacher"===i?d&&(c["teacherProfile.departmentId"]=d):"staff"===i&&d&&(c["staffProfile.departmentId"]=d),p&&(c.$or=[{firstName:{$regex:p,$options:"i"}},{lastName:{$regex:p,$options:"i"}},{fullName:{$regex:p,$options:"i"}},{email:{$regex:p,$options:"i"}},{phone:{$regex:p,$options:"i"}},{"studentProfile.registrationNumber":{$regex:p,$options:"i"}},{"teacherProfile.employeeId":{$regex:p,$options:"i"}},{"staffProfile.employeeId":{$regex:p,$options:"i"}}]);let[u,m]=await Promise.all([S.default.find(c).populate("branchId","name code city").populate("studentProfile.classId","name grade sections").populate("studentProfile.departmentId","name code").populate("teacherProfile.departmentId","name code").populate("teacherProfile.subjects","name code").populate("teacherProfile.classes.classId","name grade").populate("teacherProfile.classes.subjectId","name code").populate("staffProfile.departmentId","name code").populate("createdBy","fullName email").populate("updatedBy","fullName email").sort({createdAt:-1}).skip(s).limit(a).lean(),S.default.countDocuments(c)]);return b.NextResponse.json({success:!0,data:u,pagination:{page:r,limit:a,total:m,pages:Math.ceil(m/a)}})}catch(e){return console.error("Error fetching users:",e),b.NextResponse.json({success:!1,message:"Failed to fetch users",error:e.message},{status:500})}}),T=(0,v.withAuth)(async(t,r,a)=>{try{await (0,$.default)();let{role:r,password:s,...i}=await t.json();if(!r)return b.NextResponse.json({success:!1,message:"Role is required"},{status:400});if(!i.firstName||!i.lastName||!i.email||!i.phone||!i.dateOfBirth||!i.gender)return b.NextResponse.json({success:!1,message:"Required fields are missing (firstName, lastName, email, phone, dateOfBirth, gender)"},{status:400});if(await S.default.findOne({email:i.email.toLowerCase()}))return b.NextResponse.json({success:!1,message:"Email already exists"},{status:400});if("super_admin"!==r){if(!i.branchId)return b.NextResponse.json({success:!1,message:"Branch is required for this role"},{status:400});let t=(await e.A(365099)).default;if(!await t.findById(i.branchId))return b.NextResponse.json({success:!1,message:"Branch not found"},{status:404})}if("student"===r&&!i.studentProfile?.classId)return b.NextResponse.json({success:!1,message:"Class is required for students"},{status:400});let n=new S.default({role:r,...i,passwordHash:s,emailVerified:!0,status:"parent"===r?"pending":"active",createdBy:a._id,updatedBy:a._id});console.log("New User",n),await n.save(),await n.populate([{path:"branchId",select:"name code city"},{path:"studentProfile.classId",select:"name grade"},{path:"studentProfile.departmentId",select:"name code"},{path:"teacherProfile.departmentId",select:"name code"},{path:"teacherProfile.subjects",select:"name code"},{path:"staffProfile.departmentId",select:"name code"},{path:"createdBy",select:"fullName email"}]),console.log("Created User",n);try{let e=process.env.SCHOOL_NAME||"Ease Academy";if(["branch_admin","super_admin","admin"].includes(r)){let t=n.toObject?n.toObject():n;t.tempPassword=s;let r=(0,I.getAdminEmailTemplate)("ADMIN_CREATED",t,e);await (0,w.sendEmail)(n.email,`${e} - Administrator Account Created`,r)}}catch(e){console.error("Failed to send admin welcome email:",e)}return b.NextResponse.json({success:!0,message:`${r.charAt(0).toUpperCase()+r.slice(1)} created successfully`,data:n},{status:201})}catch(e){return console.error("Error creating user:",e),b.NextResponse.json({success:!1,message:"Failed to create user",error:e.message},{status:500})}});e.s(["GET",0,N,"POST",0,T],116107);var A=e.i(116107);let R=new t.AppRouteRouteModule({definition:{kind:r.RouteKind.APP_ROUTE,page:"/api/users/route",pathname:"/api/users",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/src/app/api/users/route.js",nextConfigOutput:"",userland:A}),{workAsyncStorage:E,workUnitAsyncStorage:j,serverHooks:P}=R;function q(){return(0,a.patchFetch)({workAsyncStorage:E,workUnitAsyncStorage:j})}async function O(e,t,a){R.isDev&&(0,s.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let b="/api/users/route";b=b.replace(/\/index$/,"")||"/";let v=await R.prepare(e,t,{srcPage:b,multiZoneDraftMode:!1});if(!v)return t.statusCode=400,t.end("Bad Request"),null==a.waitUntil||a.waitUntil.call(a,Promise.resolve()),null;let{buildId:S,params:w,nextConfig:I,parsedUrl:$,isDraftMode:N,prerenderManifest:T,routerServerContext:A,isOnDemandRevalidate:E,revalidateOnlyGenerated:j,resolvedPathname:P,clientReferenceManifest:q,serverActionsManifest:O}=v,C=(0,o.normalizeAppPath)(b),U=!!(T.dynamicRoutes[C]||T.routes[P]),D=async()=>((null==A?void 0:A.render404)?await A.render404(e,t,$,!1):t.end("This page could not be found"),null);if(U&&!N){let e=!!T.routes[P],t=T.dynamicRoutes[C];if(t&&!1===t.fallback&&!e){if(I.experimental.adapterPath)return await D();throw new y.NoFallbackError}}let B=null;!U||R.isDev||N||(B="/index"===(B=P)?"/":B);let k=!0===R.isDev||!U,_=U&&!k;O&&q&&(0,n.setReferenceManifestsSingleton)({page:b,clientReferenceManifest:q,serverActionsManifest:O,serverModuleMap:(0,d.createServerModuleMap)({serverActionsManifest:O})});let M=e.method||"GET",H=(0,i.getTracer)(),z=H.getActiveScopeSpan(),F={params:w,prerenderManifest:T,renderOpts:{experimental:{authInterrupts:!!I.experimental.authInterrupts},cacheComponents:!!I.cacheComponents,supportsDynamicResponse:k,incrementalCache:(0,s.getRequestMeta)(e,"incrementalCache"),cacheLifeProfiles:I.cacheLife,waitUntil:a.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,r,a)=>R.onRequestError(e,t,a,A)},sharedContext:{buildId:S}},Y=new l.NodeNextRequest(e),G=new l.NodeNextResponse(t),L=p.NextRequestAdapter.fromNodeNextRequest(Y,(0,p.signalFromNodeResponse)(t));try{let n=async e=>R.handle(L,F).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let r=H.getRootSpanAttributes();if(!r)return;if(r.get("next.span_type")!==c.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${r.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let a=r.get("next.route");if(a){let t=`${M} ${a}`;e.setAttributes({"next.route":a,"http.route":a,"next.span_name":t}),e.updateName(t)}else e.updateName(`${M} ${b}`)}),d=!!(0,s.getRequestMeta)(e,"minimalMode"),o=async s=>{var i,o;let l=async({previousCacheEntry:r})=>{try{if(!d&&E&&j&&!r)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let i=await n(s);e.fetchMetrics=F.renderOpts.fetchMetrics;let o=F.renderOpts.pendingWaitUntil;o&&a.waitUntil&&(a.waitUntil(o),o=void 0);let l=F.renderOpts.collectedTags;if(!U)return await (0,m.sendResponse)(Y,G,i,F.renderOpts.pendingWaitUntil),null;{let e=await i.blob(),t=(0,f.toNodeOutgoingHttpHeaders)(i.headers);l&&(t[g.NEXT_CACHE_TAGS_HEADER]=l),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let r=void 0!==F.renderOpts.collectedRevalidate&&!(F.renderOpts.collectedRevalidate>=g.INFINITE_CACHE)&&F.renderOpts.collectedRevalidate,a=void 0===F.renderOpts.collectedExpire||F.renderOpts.collectedExpire>=g.INFINITE_CACHE?void 0:F.renderOpts.collectedExpire;return{value:{kind:x.CachedRouteKind.APP_ROUTE,status:i.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:r,expire:a}}}}catch(t){throw(null==r?void 0:r.isStale)&&await R.onRequestError(e,t,{routerKind:"App Router",routePath:b,routeType:"route",revalidateReason:(0,u.getRevalidateReason)({isStaticGeneration:_,isOnDemandRevalidate:E})},A),t}},p=await R.handleResponse({req:e,nextConfig:I,cacheKey:B,routeKind:r.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:T,isRoutePPREnabled:!1,isOnDemandRevalidate:E,revalidateOnlyGenerated:j,responseGenerator:l,waitUntil:a.waitUntil,isMinimalMode:d});if(!U)return null;if((null==p||null==(i=p.value)?void 0:i.kind)!==x.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==p||null==(o=p.value)?void 0:o.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});d||t.setHeader("x-nextjs-cache",E?"REVALIDATED":p.isMiss?"MISS":p.isStale?"STALE":"HIT"),N&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let c=(0,f.fromNodeOutgoingHttpHeaders)(p.value.headers);return d&&U||c.delete(g.NEXT_CACHE_TAGS_HEADER),!p.cacheControl||t.getHeader("Cache-Control")||c.get("Cache-Control")||c.set("Cache-Control",(0,h.getCacheControlHeader)(p.cacheControl)),await (0,m.sendResponse)(Y,G,new Response(p.value.body,{headers:c,status:p.value.status||200})),null};z?await o(z):await H.withPropagatedContext(e.headers,()=>H.trace(c.BaseServerSpan.handleRequest,{spanName:`${M} ${b}`,kind:i.SpanKind.SERVER,attributes:{"http.method":M,"http.target":e.url}},o))}catch(t){if(t instanceof y.NoFallbackError||await R.onRequestError(e,t,{routerKind:"App Router",routePath:C,routeType:"route",revalidateReason:(0,u.getRevalidateReason)({isStaticGeneration:_,isOnDemandRevalidate:E})}),U)throw t;return await (0,m.sendResponse)(Y,G,new Response(null,{status:500})),null}}e.s(["handler",()=>O,"patchFetch",()=>q,"routeModule",()=>R,"serverHooks",()=>P,"workAsyncStorage",()=>E,"workUnitAsyncStorage",()=>j],39427)},365099,e=>{e.v(e=>Promise.resolve().then(()=>e(518041)))}];

//# sourceMappingURL=%5Broot-of-the-server%5D__111f6837._.js.map