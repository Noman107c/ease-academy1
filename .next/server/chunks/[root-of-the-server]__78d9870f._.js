module.exports=[918622,(e,t,r)=>{t.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},556704,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},832319,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},324725,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},224361,(e,t,r)=>{t.exports=e.x("util",()=>require("util"))},518041,e=>{"use strict";var t=e.i(926046);let r=new t.default.Schema({name:{type:String,required:[!0,"Branch name is required"],trim:!0},code:{type:String,required:[!0,"Branch code is required"],unique:!0,uppercase:!0,trim:!0},address:{street:String,city:String,state:String,zipCode:String,country:String},contact:{phone:String,email:String},location:{latitude:Number,longitude:Number,address:String},bankAccounts:[{accountTitle:String,serviceName:String,accountNo:String,iban:String,isDefault:{type:Boolean,default:!1}}],admin:{type:t.default.Schema.Types.ObjectId,ref:"User",default:null},status:{type:String,enum:["active","inactive"],default:"active"},settings:{type:Map,of:t.default.Schema.Types.Mixed,default:{}}},{timestamps:!0}),a=t.default.models.Branch||t.default.model("Branch",r);e.s(["default",0,a])},270406,(e,t,r)=>{t.exports=e.x("next/dist/compiled/@opentelemetry/api",()=>require("next/dist/compiled/@opentelemetry/api"))},193695,(e,t,r)=>{t.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},926046,(e,t,r)=>{t.exports=e.x("mongoose",()=>require("mongoose"))},300794,(e,t,r)=>{t.exports=e.x("node:dns/promises",()=>require("node:dns/promises"))},87170,e=>{"use strict";var t=e.i(300794),r=e.i(926046);t.default.setServers(["8.8.8.8","8.8.4.4"]);let a=process.env.MONGODB_URI,s="true"!==process.env.ENABLE_REAL_DB||!a,i=e.g.mongoose;async function d(){if(s)return null;if(i.conn)return i.conn;i.promise||(i.promise=r.default.connect(a,{bufferCommands:!1}).then(e=>(console.log("✅ MongoDB connected successfully"),e)));try{i.conn=await i.promise}catch(e){throw i.promise=null,e}return i.conn}function o(){return s}i||(i=e.g.mongoose={conn:null,promise:null}),e.s(["default",0,d,"isMockMode",()=>o])},254799,(e,t,r)=>{t.exports=e.x("crypto",()=>require("crypto"))},688947,(e,t,r)=>{t.exports=e.x("stream",()=>require("stream"))},500874,(e,t,r)=>{t.exports=e.x("buffer",()=>require("buffer"))},446786,(e,t,r)=>{t.exports=e.x("os",()=>require("os"))},427699,(e,t,r)=>{t.exports=e.x("events",()=>require("events"))},814747,(e,t,r)=>{t.exports=e.x("path",()=>require("path"))},522734,(e,t,r)=>{t.exports=e.x("fs",()=>require("fs"))},792509,(e,t,r)=>{t.exports=e.x("url",()=>require("url"))},921517,(e,t,r)=>{t.exports=e.x("http",()=>require("http"))},524836,(e,t,r)=>{t.exports=e.x("https",()=>require("https"))},406461,(e,t,r)=>{t.exports=e.x("zlib",()=>require("zlib"))},449719,(e,t,r)=>{t.exports=e.x("assert",()=>require("assert"))},504446,(e,t,r)=>{t.exports=e.x("net",()=>require("net"))},285465,e=>{"use strict";var t=e.i(838026);async function r(e,a={}){try{let r={errorCorrectionLevel:"H",type:"image/png",quality:.95,margin:7,width:300,color:{dark:"#000000",light:"#FFFFFF"},...a};return await t.default.toDataURL(e,r)}catch(e){throw console.error("QR Code generation error:",e),Error(`Failed to generate QR code: ${e.message}`)}}async function a(e){return r(JSON.stringify({id:e._id||e.id,employeeId:e.teacherProfile?.employeeId||e.employeeId,name:e.fullName||`${e.firstName} ${e.lastName}`,email:e.email,type:"teacher",generatedAt:new Date().toISOString()}),{width:400,margin:2})}async function s(e){return r(JSON.stringify({id:e._id||e.id,registrationNumber:e.studentProfile?.registrationNumber||e.registrationNumber,name:e.fullName||`${e.firstName} ${e.lastName}`,class:e.studentProfile?.classId?.name||"",type:"student",generatedAt:new Date().toISOString()}),{width:400,margin:2})}async function i(e){return r(JSON.stringify({id:e._id||e.id,employeeId:e.staffProfile?.employeeId||e.employeeId,name:e.fullName||`${e.firstName} ${e.lastName}`,email:e.email,type:"staff",generatedAt:new Date().toISOString()}),{width:400,margin:2})}function d(e){try{return JSON.parse(e)}catch(e){return console.error("QR decode error:",e),null}}e.s(["decodeQRData",()=>d,"default",0,{generateQRCode:r,generateTeacherQR:a,generateStudentQR:s,generateStaffQR:i,decodeQRData:d},"generateQRCode",()=>r,"generateStaffQR",()=>i,"generateStudentQR",()=>s,"generateTeacherQR",()=>a])},711886,e=>{"use strict";e.s(["getTeacherEmailTemplate",0,(e,t,r="Ease Academy")=>{let a=`
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
  `,d=`
    padding: 30px;
    background: #f9f9f9;
  `,o=`
    background: white;
    padding: 20px;
    border-radius: 4px;
    margin: 20px 0;
    border-left: 4px solid #4a90e2;
  `,n=`
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
          body { ${a} }
          .container { ${i} }
          .header { ${s} }
          .content { ${d} }
          .details { ${o} }
          .footer { ${n} }
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
            <h2 style="margin: 0; font-size: 28px;">👨‍🏫 ${r}</h2>
            <p style="margin: 10px 0 0 0; font-size: 14px;">Welcome to Our Teaching Faculty</p>
          </div>
          
          <div class="content">
            <p style="margin-top: 0; font-size: 16px; font-weight: 500;">Dear ${t.firstName} ${t.lastName},</p>
            
            <div class="success-badge">
              ✅ Your account has been successfully created!
            </div>
            
            <p>We are pleased to welcome you to ${r} as a member of our esteemed teaching faculty. Your profile has been created and you can now access the school management system.</p>
            
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
            
            <p style="margin: 20px 0 0 0;">Best regards,<br><strong>${r} Administration</strong></p>
          </div>
          
          <div class="footer">
            <p style="margin: 0;">This is an automated email. Please do not reply to this message.</p>
            <p style="margin: 5px 0 0 0;">&copy; ${new Date().getFullYear()} ${r}. All rights reserved.</p>
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
          body { ${a} }
          .container { ${i} }
          .header { ${s} }
          .content { ${d} }
          .details { ${o} }
          .footer { ${n} }
          .alert { background: #fff3cd; padding: 15px; border-radius: 4px; margin: 15px 0; border-left: 4px solid #ffc107; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 style="margin: 0; font-size: 28px;">📝 ${r}</h2>
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
            
            <p style="margin: 20px 0 0 0;">Best regards,<br><strong>${r} Administration</strong></p>
          </div>
          
          <div class="footer">
            <p style="margin: 0;">This is an automated email. Please do not reply to this message.</p>
            <p style="margin: 5px 0 0 0;">&copy; ${new Date().getFullYear()} ${r}. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;if("TEACHER_STATUS_CHANGED"===e){let e={active:{color:"#27ae60",icon:"✅",label:"ACTIVE",bg:"#d4edda"},on_leave:{color:"#f39c12",icon:"🏖️",label:"ON LEAVE",bg:"#fff3cd"},terminated:{color:"#e74c3c",icon:"⛔",label:"TERMINATED",bg:"#f8d7da"},resigned:{color:"#95a5a6",icon:"📝",label:"RESIGNED",bg:"#e2e3e5"}},p=e[t.status]||e.active;return`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { ${a} }
          .container { ${i} }
          .header { ${s} }
          .content { ${d} }
          .details { ${o} }
          .footer { ${n} }
          .status-badge { 
            background: ${p.bg}; 
            color: ${p.color}; 
            padding: 15px 20px; 
            border-radius: 4px; 
            display: inline-block; 
            margin: 15px 0; 
            border: 2px solid ${p.color};
            font-weight: 700;
            font-size: 18px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 style="margin: 0; font-size: 28px;">🔔 ${r}</h2>
            <p style="margin: 10px 0 0 0; font-size: 14px;">Employment Status Update</p>
          </div>
          
          <div class="content">
            <p style="margin-top: 0; font-size: 16px; font-weight: 500;">Dear ${t.firstName} ${t.lastName},</p>
            
            <p>This is to inform you that your employment status has been updated.</p>
            
            <div class="status-badge">
              ${p.icon} ${p.label}
            </div>
            
            ${l}
            
            <div style="${o}">
              <h4 style="margin-top: 0; color: ${p.color};">Current Employment Status</h4>
              <table style="width: 100%; font-size: 14px;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; width: 40%;">Status:</td>
                  <td style="padding: 8px 0;"><strong style="color: ${p.color};">${p.label}</strong></td>
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
            
            <p style="margin: 20px 0 0 0;">Best regards,<br><strong>${r} Administration</strong></p>
          </div>
          
          <div class="footer">
            <p style="margin: 0;">This is an automated email. Please do not reply to this message.</p>
            <p style="margin: 5px 0 0 0;">&copy; ${new Date().getFullYear()} ${r}. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `}return`<html><body><p>Hello ${t.firstName},</p><p>Your teacher record has been updated.</p></body></html>`}])},322714,e=>{e.v(t=>Promise.all(["server/chunks/src_backend_models_6e4fd142._.js"].map(t=>e.l(t))).then(()=>t(979982)))}];

//# sourceMappingURL=%5Broot-of-the-server%5D__78d9870f._.js.map