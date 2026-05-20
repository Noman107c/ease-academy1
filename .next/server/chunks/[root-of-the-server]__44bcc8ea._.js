module.exports=[446786,(e,t,a)=>{t.exports=e.x("os",()=>require("os"))},427699,(e,t,a)=>{t.exports=e.x("events",()=>require("events"))},814747,(e,t,a)=>{t.exports=e.x("path",()=>require("path"))},522734,(e,t,a)=>{t.exports=e.x("fs",()=>require("fs"))},792509,(e,t,a)=>{t.exports=e.x("url",()=>require("url"))},524836,(e,t,a)=>{t.exports=e.x("https",()=>require("https"))},921517,(e,t,a)=>{t.exports=e.x("http",()=>require("http"))},406461,(e,t,a)=>{t.exports=e.x("zlib",()=>require("zlib"))},449719,(e,t,a)=>{t.exports=e.x("assert",()=>require("assert"))},918622,(e,t,a)=>{t.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},556704,(e,t,a)=>{t.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},832319,(e,t,a)=>{t.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},324725,(e,t,a)=>{t.exports=e.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},224361,(e,t,a)=>{t.exports=e.x("util",()=>require("util"))},518041,e=>{"use strict";var t=e.i(926046);let a=new t.default.Schema({name:{type:String,required:[!0,"Branch name is required"],trim:!0},code:{type:String,required:[!0,"Branch code is required"],unique:!0,uppercase:!0,trim:!0},address:{street:String,city:String,state:String,zipCode:String,country:String},contact:{phone:String,email:String},location:{latitude:Number,longitude:Number,address:String},bankAccounts:[{accountTitle:String,serviceName:String,accountNo:String,iban:String,isDefault:{type:Boolean,default:!1}}],admin:{type:t.default.Schema.Types.ObjectId,ref:"User",default:null},status:{type:String,enum:["active","inactive"],default:"active"},settings:{type:Map,of:t.default.Schema.Types.Mixed,default:{}}},{timestamps:!0}),r=t.default.models.Branch||t.default.model("Branch",a);e.s(["default",0,r])},270406,(e,t,a)=>{t.exports=e.x("next/dist/compiled/@opentelemetry/api",()=>require("next/dist/compiled/@opentelemetry/api"))},193695,(e,t,a)=>{t.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},926046,(e,t,a)=>{t.exports=e.x("mongoose",()=>require("mongoose"))},300794,(e,t,a)=>{t.exports=e.x("node:dns/promises",()=>require("node:dns/promises"))},87170,e=>{"use strict";var t=e.i(300794),a=e.i(926046);t.default.setServers(["8.8.8.8","8.8.4.4"]);let r=process.env.MONGODB_URI,s="true"!==process.env.ENABLE_REAL_DB||!r,i=e.g.mongoose;async function n(){if(s)return null;if(i.conn)return i.conn;i.promise||(i.promise=a.default.connect(r,{bufferCommands:!1}).then(e=>(console.log("✅ MongoDB connected successfully"),e)));try{i.conn=await i.promise}catch(e){throw i.promise=null,e}return i.conn}function o(){return s}i||(i=e.g.mongoose={conn:null,promise:null}),e.s(["default",0,n,"isMockMode",()=>o])},254799,(e,t,a)=>{t.exports=e.x("crypto",()=>require("crypto"))},688947,(e,t,a)=>{t.exports=e.x("stream",()=>require("stream"))},500874,(e,t,a)=>{t.exports=e.x("buffer",()=>require("buffer"))},482143,e=>{"use strict";var t=e.i(926046);let a=new t.default.Schema({name:{type:String,required:!0,trim:!0},gradeNumber:{type:Number},levelId:{type:t.default.Schema.Types.ObjectId,ref:"Level"},code:{type:String,trim:!0},academicYear:{type:t.default.Schema.Types.ObjectId,ref:"AcademicYear"},description:String,createdBy:{type:t.default.Schema.Types.ObjectId,ref:"User"},updatedBy:{type:t.default.Schema.Types.ObjectId,ref:"User"}},{timestamps:!0});a.index({levelId:1}),a.index({gradeNumber:1});let r=t.default.models.Grade||t.default.model("Grade",a);e.s(["default",0,r])},979982,e=>{"use strict";var t=e.i(926046);e.i(482143);let a=new t.default.Schema({name:{type:String,required:[!0,"Class name is required"],trim:!0},code:{type:String,required:[!0,"Class code is required"],unique:!0,uppercase:!0,trim:!0},grade:{type:t.default.Schema.Types.ObjectId,ref:"Grade",required:[!0,"Grade is required"]},sections:[{name:{type:String,required:!0,trim:!0},capacity:{type:Number,default:40,min:1},classTeacherId:{type:t.default.Schema.Types.ObjectId,ref:"User"},roomNumber:{type:String,trim:!0}}],branchId:{type:t.default.Schema.Types.ObjectId,ref:"Branch",required:[!0,"Branch is required"]},academicYear:{type:t.default.Schema.Types.ObjectId,ref:"AcademicYear",required:[!0,"Academic year is required"]},subjects:[{type:t.default.Schema.Types.ObjectId,ref:"Subject"}],feeTemplates:[{type:t.default.Schema.Types.ObjectId,ref:"FeeTemplate"}],description:{type:String,trim:!0},status:{type:String,enum:["active","inactive","archived"],default:"active"},createdBy:{type:t.default.Schema.Types.ObjectId,ref:"User"},updatedBy:{type:t.default.Schema.Types.ObjectId,ref:"User"}},{timestamps:!0});a.index({branchId:1}),a.index({academicYear:1}),a.index({grade:1});let r=t.default.models.Class||t.default.model("Class",a);e.s(["default",0,r])},504446,(e,t,a)=>{t.exports=e.x("net",()=>require("net"))},168914,e=>{"use strict";var t=e.i(926046);let a=new t.default.Schema({name:{type:String,required:!0,trim:!0},code:{type:String,required:!0,unique:!0,uppercase:!0,trim:!0},description:String,headTeacherId:{type:t.default.Schema.Types.ObjectId,ref:"User"},branchId:{type:t.default.Schema.Types.ObjectId,ref:"Branch",required:!0},teachers:[{type:t.default.Schema.Types.ObjectId,ref:"User"}],subjects:[{type:t.default.Schema.Types.ObjectId,ref:"Subject"}],officeLocation:String,officeHours:String,budget:{allocatedAmount:{type:Number,default:0},spentAmount:{type:Number,default:0},year:Number},academicYears:[String],programsOffered:[String],classrooms:Number,labRooms:Number,librarySection:String,specialFacilities:[String],departmentGoals:[String],achievements:[{title:String,date:Date,description:String}],hod:{name:String,office:String},status:{type:String,enum:["active","inactive","archived"],default:"active"},remarks:String,createdBy:{type:t.default.Schema.Types.ObjectId,ref:"User"},updatedBy:{type:t.default.Schema.Types.ObjectId,ref:"User"}},{timestamps:!0});a.index({code:1}),a.index({branchId:1}),a.index({headTeacherId:1}),a.index({status:1}),a.set("toJSON",{virtuals:!0}),a.set("toObject",{virtuals:!0});let r=t.default.models.Department||t.default.model("Department",a);e.s(["default",0,r])},285465,e=>{"use strict";var t=e.i(838026);async function a(e,r={}){try{let a={errorCorrectionLevel:"H",type:"image/png",quality:.95,margin:7,width:300,color:{dark:"#000000",light:"#FFFFFF"},...r};return await t.default.toDataURL(e,a)}catch(e){throw console.error("QR Code generation error:",e),Error(`Failed to generate QR code: ${e.message}`)}}async function r(e){return a(JSON.stringify({id:e._id||e.id,employeeId:e.teacherProfile?.employeeId||e.employeeId,name:e.fullName||`${e.firstName} ${e.lastName}`,email:e.email,type:"teacher",generatedAt:new Date().toISOString()}),{width:400,margin:2})}async function s(e){return a(JSON.stringify({id:e._id||e.id,registrationNumber:e.studentProfile?.registrationNumber||e.registrationNumber,name:e.fullName||`${e.firstName} ${e.lastName}`,class:e.studentProfile?.classId?.name||"",type:"student",generatedAt:new Date().toISOString()}),{width:400,margin:2})}async function i(e){return a(JSON.stringify({id:e._id||e.id,employeeId:e.staffProfile?.employeeId||e.employeeId,name:e.fullName||`${e.firstName} ${e.lastName}`,email:e.email,type:"staff",generatedAt:new Date().toISOString()}),{width:400,margin:2})}function n(e){try{return JSON.parse(e)}catch(e){return console.error("QR decode error:",e),null}}e.s(["decodeQRData",()=>n,"default",0,{generateQRCode:a,generateTeacherQR:r,generateStudentQR:s,generateStaffQR:i,decodeQRData:n},"generateQRCode",()=>a,"generateStaffQR",()=>i,"generateStudentQR",()=>s,"generateTeacherQR",()=>r])},711886,e=>{"use strict";e.s(["getTeacherEmailTemplate",0,(e,t,a="Ease Academy")=>{let r=`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #333;
    line-height: 1.6;
  `,s=`
    background: linear-gradient(135deg, #4a90e2 0%, #357abd 100%);
    color: white;
    padding: 30px;
    text-align: center;
    border-radius: 8px 8px 0 0;
  `,i=`
    max-width: 600px;
    margin: 0 auto;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  `,n=`
    padding: 30px;
    background: #f9f9f9;
  `,o=`
    background: white;
    padding: 20px;
    border-radius: 4px;
    margin: 20px 0;
    border-left: 4px solid #4a90e2;
  `,d=`
    background: #f0f0f0;
    padding: 20px;
    text-align: center;
    font-size: 12px;
    color: #666;
    border-top: 1px solid #ddd;
  `,l=`
    <div style="${o}">
      <h4 style="margin-top: 0; color: #4a90e2;">Teacher Information</h4>
      <table style="width: 100%; font-size: 14px;">
        <tr>
          <td style="padding: 8px 0; font-weight: bold; width: 40%;">Name:</td>
          <td style="padding: 8px 0;">${t.fullName||`${t.firstName} ${t.lastName}`}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold;">Employee ID:</td>
          <td style="padding: 8px 0;">${t.teacherProfile?.employeeId||"Pending"}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold;">Email:</td>
          <td style="padding: 8px 0;">${t.email}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
          <td style="padding: 8px 0;">${t.phone}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold;">Designation:</td>
          <td style="padding: 8px 0;">${t.teacherProfile?.designation||"Teacher"}</td>
        </tr>
      </table>
    </div>
  `;if("TEACHER_CREATED"===e){let e=(t.teacherProfile?.salaryDetails?.basicSalary||0)+(t.teacherProfile?.salaryDetails?.allowances?.houseRent||0)+(t.teacherProfile?.salaryDetails?.allowances?.medical||0)+(t.teacherProfile?.salaryDetails?.allowances?.transport||0);return`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { ${r} }
          .container { ${i} }
          .header { ${s} }
          .content { ${n} }
          .details { ${o} }
          .footer { ${d} }
          .success-badge { 
            background: #d4edda; 
            color: #155724; 
            padding: 10px 15px; 
            border-radius: 4px; 
            display: inline-block; 
            margin: 15px 0; 
            border: 1px solid #c3e6cb;
            font-weight: 600;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 style="margin: 0; font-size: 28px;">👨‍🏫 ${a}</h2>
            <p style="margin: 10px 0 0 0; font-size: 14px;">Welcome to Our Teaching Faculty</p>
          </div>
          
          <div class="content">
            <p style="margin-top: 0; font-size: 16px; font-weight: 500;">Dear ${t.firstName} ${t.lastName},</p>
            
            <div class="success-badge">
              ✅ Your account has been successfully created!
            </div>
            
            <p>We are pleased to welcome you to ${a} as a member of our esteemed teaching faculty. Your profile has been created and you can now access the school management system.</p>
            
            ${l}
            
            <div style="${o}">
              <h4 style="margin-top: 0; color: #4a90e2;">Academic Assignment</h4>
              <table style="width: 100%; font-size: 14px;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; width: 40%;">Branch:</td>
                  <td style="padding: 8px 0;">${t.branchId?.name||"N/A"}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Department:</td>
                  <td style="padding: 8px 0;">${t.teacherProfile?.departmentId?.name||"General"}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Joining Date:</td>
                  <td style="padding: 8px 0;">${new Date(t.teacherProfile?.joiningDate||new Date).toLocaleDateString()}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Classes Assigned:</td>
                  <td style="padding: 8px 0;">${t.teacherProfile?.classes?.length||0} Classes</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Subjects:</td>
                  <td style="padding: 8px 0;">${t.teacherProfile?.subjects?.length||0} Subjects</td>
                </tr>
              </table>
            </div>

            ${t.teacherProfile?.salaryDetails?.basicSalary?`
            <div style="${o}">
              <h4 style="margin-top: 0; color: #4a90e2;">Salary Information</h4>
              <table style="width: 100%; font-size: 14px;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; width: 40%;">Basic Salary:</td>
                  <td style="padding: 8px 0;">PKR ${t.teacherProfile.salaryDetails.basicSalary.toLocaleString()}</td>
                </tr>
                ${t.teacherProfile.salaryDetails.allowances?.houseRent?`
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">House Rent:</td>
                  <td style="padding: 8px 0;">PKR ${t.teacherProfile.salaryDetails.allowances.houseRent.toLocaleString()}</td>
                </tr>
                `:""}
                ${t.teacherProfile.salaryDetails.allowances?.medical?`
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Medical Allowance:</td>
                  <td style="padding: 8px 0;">PKR ${t.teacherProfile.salaryDetails.allowances.medical.toLocaleString()}</td>
                </tr>
                `:""}
                <tr style="border-top: 2px solid #4a90e2;">
                  <td style="padding: 12px 0 8px 0; font-weight: bold; font-size: 16px;">Gross Salary:</td>
                  <td style="padding: 12px 0 8px 0; font-weight: bold; font-size: 16px; color: #27ae60;">PKR ${e.toLocaleString()}</td>
                </tr>
              </table>
            </div>
            `:""}
            
            <div style="${o}">
              <h4 style="margin-top: 0; color: #4a90e2;">Login Credentials</h4>
              <table style="width: 100%; font-size: 14px;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; width: 40%;">Email/Username:</td>
                  <td style="padding: 8px 0;">${t.email}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Default Password:</td>
                  <td style="padding: 8px 0; background: #fff3cd; padding: 8px; border-radius: 4px;"><strong>Teacher@123</strong></td>
                </tr>
              </table>
              <p style="margin: 15px 0 0 0; font-size: 13px; color: #856404; background: #fff3cd; padding: 10px; border-radius: 4px;">
                ⚠️ <strong>Important:</strong> Please change your password after first login for security purposes.
              </p>
            </div>
            
            <p style="margin: 25px 0; color: #666; font-size: 14px;">If you have any questions or need assistance, please don't hesitate to contact the school administration.</p>
            
            <p style="margin: 20px 0 0 0;">Best regards,<br><strong>${a} Administration</strong></p>
          </div>
          
          <div class="footer">
            <p style="margin: 0;">This is an automated email. Please do not reply to this message.</p>
            <p style="margin: 5px 0 0 0;">&copy; ${new Date().getFullYear()} ${a}. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `}if("TEACHER_UPDATED"===e)return`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { ${r} }
          .container { ${i} }
          .header { ${s} }
          .content { ${n} }
          .details { ${o} }
          .footer { ${d} }
          .alert { background: #fff3cd; padding: 15px; border-radius: 4px; margin: 15px 0; border-left: 4px solid #ffc107; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 style="margin: 0; font-size: 28px;">📝 ${a}</h2>
            <p style="margin: 10px 0 0 0; font-size: 14px;">Profile Updated Successfully</p>
          </div>
          
          <div class="content">
            <p style="margin-top: 0; font-size: 16px; font-weight: 500;">Dear ${t.firstName} ${t.lastName},</p>
            
            <p>Your profile information has been updated in our system. Please review the details below to ensure everything is correct.</p>
            
            <div class="alert">
              <strong>⚠️ Important:</strong> If you did not request this change or notice any discrepancies, please contact the administration immediately.
            </div>
            
            ${l}
            
            <div style="${o}">
              <h4 style="margin-top: 0; color: #4a90e2;">Updated Details</h4>
              <table style="width: 100%; font-size: 14px;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; width: 40%;">Branch:</td>
                  <td style="padding: 8px 0;">${t.branchId?.name||"N/A"}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Designation:</td>
                  <td style="padding: 8px 0;">${t.teacherProfile?.designation||"Teacher"}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Classes Assigned:</td>
                  <td style="padding: 8px 0;">${t.teacherProfile?.classes?.length||0} Classes</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Subjects:</td>
                  <td style="padding: 8px 0;">${t.teacherProfile?.subjects?.length||0} Subjects</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Status:</td>
                  <td style="padding: 8px 0;"><strong style="color: ${"active"===t.status?"#27ae60":"on_leave"===t.status?"#f39c12":"#e74c3c"};">${(t.status||"active").toUpperCase().replace("_"," ")}</strong></td>
                </tr>
              </table>
            </div>
            
            <p style="margin: 20px 0; color: #666; font-size: 14px;">If you have any questions about these updates, please contact the school administration.</p>
            
            <p style="margin: 20px 0 0 0;">Best regards,<br><strong>${a} Administration</strong></p>
          </div>
          
          <div class="footer">
            <p style="margin: 0;">This is an automated email. Please do not reply to this message.</p>
            <p style="margin: 5px 0 0 0;">&copy; ${new Date().getFullYear()} ${a}. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;if("TEACHER_STATUS_CHANGED"===e){let e={active:{color:"#27ae60",icon:"✅",label:"ACTIVE",bg:"#d4edda"},on_leave:{color:"#f39c12",icon:"🏖️",label:"ON LEAVE",bg:"#fff3cd"},terminated:{color:"#e74c3c",icon:"⛔",label:"TERMINATED",bg:"#f8d7da"},resigned:{color:"#95a5a6",icon:"📝",label:"RESIGNED",bg:"#e2e3e5"}},c=e[t.status]||e.active;return`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { ${r} }
          .container { ${i} }
          .header { ${s} }
          .content { ${n} }
          .details { ${o} }
          .footer { ${d} }
          .status-badge { 
            background: ${c.bg}; 
            color: ${c.color}; 
            padding: 15px 20px; 
            border-radius: 4px; 
            display: inline-block; 
            margin: 15px 0; 
            border: 2px solid ${c.color};
            font-weight: 700;
            font-size: 18px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 style="margin: 0; font-size: 28px;">🔔 ${a}</h2>
            <p style="margin: 10px 0 0 0; font-size: 14px;">Employment Status Update</p>
          </div>
          
          <div class="content">
            <p style="margin-top: 0; font-size: 16px; font-weight: 500;">Dear ${t.firstName} ${t.lastName},</p>
            
            <p>This is to inform you that your employment status has been updated.</p>
            
            <div class="status-badge">
              ${c.icon} ${c.label}
            </div>
            
            ${l}
            
            <div style="${o}">
              <h4 style="margin-top: 0; color: ${c.color};">Current Employment Status</h4>
              <table style="width: 100%; font-size: 14px;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; width: 40%;">Status:</td>
                  <td style="padding: 8px 0;"><strong style="color: ${c.color};">${c.label}</strong></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Effective Date:</td>
                  <td style="padding: 8px 0;">${new Date().toLocaleDateString()}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Branch:</td>
                  <td style="padding: 8px 0;">${t.branchId?.name||"N/A"}</td>
                </tr>
              </table>
            </div>

            ${"on_leave"===t.status?`
            <div style="background: #fff3cd; padding: 15px; border-radius: 4px; margin: 15px 0; border-left: 4px solid #ffc107;">
              <p style="margin: 0; color: #856404;"><strong>Note:</strong> Your classes have been temporarily reassigned during your leave period. You will be notified when you're expected to return.</p>
            </div>
            `:""}

            ${"terminated"===t.status||"resigned"===t.status?`
            <div style="background: #f8d7da; padding: 15px; border-radius: 4px; margin: 15px 0; border-left: 4px solid #e74c3c;">
              <p style="margin: 0; color: #721c24;"><strong>Important:</strong> Your access to the school management system will be revoked within 24 hours. Please contact HR for final settlement and clearance procedures.</p>
            </div>
            `:""}
            
            <p style="margin: 25px 0; color: #666; font-size: 14px;">If you have any questions or concerns about this status change, please contact the school administration or HR department immediately.</p>
            
            <p style="margin: 20px 0 0 0;">Best regards,<br><strong>${a} Administration</strong></p>
          </div>
          
          <div class="footer">
            <p style="margin: 0;">This is an automated email. Please do not reply to this message.</p>
            <p style="margin: 5px 0 0 0;">&copy; ${new Date().getFullYear()} ${a}. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `}return`<html><body><p>Hello ${t.firstName},</p><p>Your teacher record has been updated.</p></body></html>`}])},848302,e=>{"use strict";var t=e.i(747909),a=e.i(174017),r=e.i(996250),s=e.i(759756),i=e.i(561916),n=e.i(114444),o=e.i(837092),d=e.i(869741),l=e.i(316795),c=e.i(487718),p=e.i(995169),u=e.i(47587),m=e.i(666012),h=e.i(570101),g=e.i(626937),f=e.i(10372),y=e.i(193695);e.i(52474);var x=e.i(600220),b=e.i(89171),v=e.i(87170),w=e.i(722511),S=e.i(513637),$=e.i(285465),P=e.i(356780),R=e.i(586312),I=e.i(711886);e.i(518041),e.i(168914),e.i(979982);let N=(0,S.withAuth)(async(e,t,a)=>{try{await (0,v.default)();let{searchParams:t}=new URL(e.url),a=parseInt(t.get("page"))||1,r=parseInt(t.get("limit"))||10,s=(a-1)*r,i=t.get("search")||"",n=t.get("branchId"),o=t.get("status"),d=t.get("designation"),l=t.get("departmentId"),c={role:"teacher"};i&&(c.$or=[{firstName:{$regex:i,$options:"i"}},{lastName:{$regex:i,$options:"i"}},{fullName:{$regex:i,$options:"i"}},{"teacherProfile.employeeId":{$regex:i,$options:"i"}},{email:{$regex:i,$options:"i"}},{phone:{$regex:i,$options:"i"}},{cnic:{$regex:i,$options:"i"}}]),n&&(c.branchId=n),o&&(c.status=o),d&&(c["teacherProfile.designation"]=d),l&&(c["teacherProfile.departmentId"]=l);let[p,u]=await Promise.all([w.default.find(c).populate("branchId","name code city").populate("teacherProfile.departmentId","name code").populate("teacherProfile.subjects","name code").populate("teacherProfile.classes.classId","name code grade").populate("teacherProfile.classes.subjectId","name code").populate("createdBy","fullName email").populate("updatedBy","fullName email").sort({createdAt:-1}).skip(s).limit(r).lean(),w.default.countDocuments(c)]);return b.NextResponse.json({success:!0,data:p,pagination:{page:a,limit:r,total:u,pages:Math.ceil(u/r)}})}catch(e){return console.error("Error fetching teachers:",e),b.NextResponse.json({success:!1,message:"Failed to fetch teachers",error:e.message},{status:500})}}),T=(0,S.withAuth)(async(t,a,r)=>{try{await (0,v.default)();let a=await t.json(),s=["firstName","lastName","email","phone","dateOfBirth","gender","branchId"].filter(e=>!a[e]);if(s.length>0)return b.NextResponse.json({success:!1,message:`Missing required fields: ${s.join(", ")}`},{status:400});let i=await w.default.findOne({$or:[{email:a.email},...a.cnic?[{cnic:a.cnic}]:[]]});if(i)return b.NextResponse.json({success:!1,message:i.email===a.email?"Email already exists":"CNIC already exists"},{status:400});let n=(await e.A(365099)).default;if(!await n.findById(a.branchId))return b.NextResponse.json({success:!1,message:"Branch not found"},{status:404});if(a.teacherProfile?.classes&&a.teacherProfile.classes.length>0){let t=(await e.A(322714)).default,r=a.teacherProfile.classes.map(e=>e.classId);if((await t.find({_id:{$in:r}})).length!==r.length)return b.NextResponse.json({success:!1,message:"One or more classes not found"},{status:404})}if(a.teacherProfile?.subjects&&a.teacherProfile.subjects.length>0){let t=(await e.A(929731)).default;if((await t.find({_id:{$in:a.teacherProfile.subjects}})).length!==a.teacherProfile.subjects.length)return b.NextResponse.json({success:!1,message:"One or more subjects not found"},{status:404})}let o={joiningDate:a.teacherProfile?.joiningDate||new Date,designation:a.teacherProfile?.designation||"Teacher",departmentId:a.teacherProfile?.departmentId||null,department:a.teacherProfile?.department||null,qualifications:a.teacherProfile?.qualifications||[],experience:a.teacherProfile?.experience||{totalYears:0,previousInstitutions:[]},subjects:a.teacherProfile?.subjects||[],classes:a.teacherProfile?.classes||[],salaryDetails:a.teacherProfile?.salaryDetails||{basicSalary:0,allowances:{houseRent:0,medical:0,transport:0,other:0},deductions:{tax:0,providentFund:0,insurance:0,other:0}},leaveBalance:a.teacherProfile?.leaveBalance||{casual:15,sick:10,annual:20},emergencyContact:a.teacherProfile?.emergencyContact||{},documents:a.teacherProfile?.documents||[]},d=a.password||"Teacher@123",l=new w.default({role:"teacher",firstName:a.firstName,lastName:a.lastName,email:a.email.toLowerCase(),phone:a.phone,alternatePhone:a.alternatePhone||"",dateOfBirth:a.dateOfBirth,gender:a.gender,bloodGroup:a.bloodGroup||"",nationality:a.nationality||"Pakistani",cnic:a.cnic||"",religion:a.religion||"",address:a.address||{},branchId:a.branchId,profilePhoto:a.profilePhoto||{},teacherProfile:o,status:a.status||"active",remarks:a.remarks||"",passwordHash:d,emailVerified:!0,createdBy:r._id,updatedBy:r._id});await l.save();try{let e=await (0,$.generateTeacherQR)(l),t=await (0,P.uploadToCloudinary)(e,{folder:`ease-academy/teachers/${l._id}/qr`,resourceType:"image"});l.teacherProfile.qr={url:t.url,publicId:t.publicId,uploadedAt:new Date},await l.save()}catch(e){console.error("QR generation failed:",e)}await l.populate([{path:"branchId",select:"name code city"},{path:"teacherProfile.departmentId",select:"name code"},{path:"teacherProfile.subjects",select:"name code"},{path:"teacherProfile.classes.classId",select:"name code grade"},{path:"teacherProfile.classes.subjectId",select:"name code"},{path:"createdBy",select:"fullName email"}]);try{let e=(0,I.getTeacherEmailTemplate)("TEACHER_CREATED",l);await (0,R.sendEmail)(l.email,`Welcome to ${process.env.SCHOOL_NAME||"Ease Academy"} - Account Created`,e)}catch(e){console.error("Failed to send welcome email:",e)}return b.NextResponse.json({success:!0,message:"Teacher created successfully",data:l},{status:201})}catch(e){return console.error("Error creating teacher:",e),b.NextResponse.json({success:!1,message:"Failed to create teacher",error:e.message},{status:500})}});e.s(["GET",0,N,"POST",0,T],910895);var E=e.i(910895);let A=new t.AppRouteRouteModule({definition:{kind:a.RouteKind.APP_ROUTE,page:"/api/super-admin/teachers/route",pathname:"/api/super-admin/teachers",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/src/app/api/super-admin/teachers/route.js",nextConfigOutput:"",userland:E}),{workAsyncStorage:j,workUnitAsyncStorage:D,serverHooks:C}=A;function q(){return(0,r.patchFetch)({workAsyncStorage:j,workUnitAsyncStorage:D})}async function O(e,t,r){A.isDev&&(0,s.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let b="/api/super-admin/teachers/route";b=b.replace(/\/index$/,"")||"/";let v=await A.prepare(e,t,{srcPage:b,multiZoneDraftMode:!1});if(!v)return t.statusCode=400,t.end("Bad Request"),null==r.waitUntil||r.waitUntil.call(r,Promise.resolve()),null;let{buildId:w,params:S,nextConfig:$,parsedUrl:P,isDraftMode:R,prerenderManifest:I,routerServerContext:N,isOnDemandRevalidate:T,revalidateOnlyGenerated:E,resolvedPathname:j,clientReferenceManifest:D,serverActionsManifest:C}=v,q=(0,d.normalizeAppPath)(b),O=!!(I.dynamicRoutes[q]||I.routes[j]),k=async()=>((null==N?void 0:N.render404)?await N.render404(e,t,P,!1):t.end("This page could not be found"),null);if(O&&!R){let e=!!I.routes[j],t=I.dynamicRoutes[q];if(t&&!1===t.fallback&&!e){if($.experimental.adapterPath)return await k();throw new y.NoFallbackError}}let _=null;!O||A.isDev||R||(_="/index"===(_=j)?"/":_);let B=!0===A.isDev||!O,U=O&&!B;C&&D&&(0,n.setReferenceManifestsSingleton)({page:b,clientReferenceManifest:D,serverActionsManifest:C,serverModuleMap:(0,o.createServerModuleMap)({serverActionsManifest:C})});let H=e.method||"GET",F=(0,i.getTracer)(),z=F.getActiveScopeSpan(),M={params:S,prerenderManifest:I,renderOpts:{experimental:{authInterrupts:!!$.experimental.authInterrupts},cacheComponents:!!$.cacheComponents,supportsDynamicResponse:B,incrementalCache:(0,s.getRequestMeta)(e,"incrementalCache"),cacheLifeProfiles:$.cacheLife,waitUntil:r.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,a,r)=>A.onRequestError(e,t,r,N)},sharedContext:{buildId:w}},L=new l.NodeNextRequest(e),Y=new l.NodeNextResponse(t),G=c.NextRequestAdapter.fromNodeNextRequest(L,(0,c.signalFromNodeResponse)(t));try{let n=async e=>A.handle(G,M).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let a=F.getRootSpanAttributes();if(!a)return;if(a.get("next.span_type")!==p.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${a.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let r=a.get("next.route");if(r){let t=`${H} ${r}`;e.setAttributes({"next.route":r,"http.route":r,"next.span_name":t}),e.updateName(t)}else e.updateName(`${H} ${b}`)}),o=!!(0,s.getRequestMeta)(e,"minimalMode"),d=async s=>{var i,d;let l=async({previousCacheEntry:a})=>{try{if(!o&&T&&E&&!a)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let i=await n(s);e.fetchMetrics=M.renderOpts.fetchMetrics;let d=M.renderOpts.pendingWaitUntil;d&&r.waitUntil&&(r.waitUntil(d),d=void 0);let l=M.renderOpts.collectedTags;if(!O)return await (0,m.sendResponse)(L,Y,i,M.renderOpts.pendingWaitUntil),null;{let e=await i.blob(),t=(0,h.toNodeOutgoingHttpHeaders)(i.headers);l&&(t[f.NEXT_CACHE_TAGS_HEADER]=l),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let a=void 0!==M.renderOpts.collectedRevalidate&&!(M.renderOpts.collectedRevalidate>=f.INFINITE_CACHE)&&M.renderOpts.collectedRevalidate,r=void 0===M.renderOpts.collectedExpire||M.renderOpts.collectedExpire>=f.INFINITE_CACHE?void 0:M.renderOpts.collectedExpire;return{value:{kind:x.CachedRouteKind.APP_ROUTE,status:i.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:a,expire:r}}}}catch(t){throw(null==a?void 0:a.isStale)&&await A.onRequestError(e,t,{routerKind:"App Router",routePath:b,routeType:"route",revalidateReason:(0,u.getRevalidateReason)({isStaticGeneration:U,isOnDemandRevalidate:T})},N),t}},c=await A.handleResponse({req:e,nextConfig:$,cacheKey:_,routeKind:a.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:I,isRoutePPREnabled:!1,isOnDemandRevalidate:T,revalidateOnlyGenerated:E,responseGenerator:l,waitUntil:r.waitUntil,isMinimalMode:o});if(!O)return null;if((null==c||null==(i=c.value)?void 0:i.kind)!==x.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==c||null==(d=c.value)?void 0:d.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});o||t.setHeader("x-nextjs-cache",T?"REVALIDATED":c.isMiss?"MISS":c.isStale?"STALE":"HIT"),R&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let p=(0,h.fromNodeOutgoingHttpHeaders)(c.value.headers);return o&&O||p.delete(f.NEXT_CACHE_TAGS_HEADER),!c.cacheControl||t.getHeader("Cache-Control")||p.get("Cache-Control")||p.set("Cache-Control",(0,g.getCacheControlHeader)(c.cacheControl)),await (0,m.sendResponse)(L,Y,new Response(c.value.body,{headers:p,status:c.value.status||200})),null};z?await d(z):await F.withPropagatedContext(e.headers,()=>F.trace(p.BaseServerSpan.handleRequest,{spanName:`${H} ${b}`,kind:i.SpanKind.SERVER,attributes:{"http.method":H,"http.target":e.url}},d))}catch(t){if(t instanceof y.NoFallbackError||await A.onRequestError(e,t,{routerKind:"App Router",routePath:q,routeType:"route",revalidateReason:(0,u.getRevalidateReason)({isStaticGeneration:U,isOnDemandRevalidate:T})}),O)throw t;return await (0,m.sendResponse)(L,Y,new Response(null,{status:500})),null}}e.s(["handler",()=>O,"patchFetch",()=>q,"routeModule",()=>A,"serverHooks",()=>C,"workAsyncStorage",()=>j,"workUnitAsyncStorage",()=>D],848302)},365099,e=>{e.v(e=>Promise.resolve().then(()=>e(518041)))},322714,e=>{e.v(e=>Promise.resolve().then(()=>e(979982)))},929731,e=>{e.v(t=>Promise.all(["server/chunks/src_backend_models_Subject_bb53aee6.js"].map(t=>e.l(t))).then(()=>t(884118)))}];

//# sourceMappingURL=%5Broot-of-the-server%5D__44bcc8ea._.js.map