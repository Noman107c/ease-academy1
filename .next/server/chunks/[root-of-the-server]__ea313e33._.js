module.exports=[446786,(e,t,r)=>{t.exports=e.x("os",()=>require("os"))},427699,(e,t,r)=>{t.exports=e.x("events",()=>require("events"))},814747,(e,t,r)=>{t.exports=e.x("path",()=>require("path"))},522734,(e,t,r)=>{t.exports=e.x("fs",()=>require("fs"))},792509,(e,t,r)=>{t.exports=e.x("url",()=>require("url"))},524836,(e,t,r)=>{t.exports=e.x("https",()=>require("https"))},921517,(e,t,r)=>{t.exports=e.x("http",()=>require("http"))},406461,(e,t,r)=>{t.exports=e.x("zlib",()=>require("zlib"))},449719,(e,t,r)=>{t.exports=e.x("assert",()=>require("assert"))},918622,(e,t,r)=>{t.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},556704,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},832319,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},324725,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},224361,(e,t,r)=>{t.exports=e.x("util",()=>require("util"))},518041,e=>{"use strict";var t=e.i(926046);let r=new t.default.Schema({name:{type:String,required:[!0,"Branch name is required"],trim:!0},code:{type:String,required:[!0,"Branch code is required"],unique:!0,uppercase:!0,trim:!0},address:{street:String,city:String,state:String,zipCode:String,country:String},contact:{phone:String,email:String},location:{latitude:Number,longitude:Number,address:String},bankAccounts:[{accountTitle:String,serviceName:String,accountNo:String,iban:String,isDefault:{type:Boolean,default:!1}}],admin:{type:t.default.Schema.Types.ObjectId,ref:"User",default:null},status:{type:String,enum:["active","inactive"],default:"active"},settings:{type:Map,of:t.default.Schema.Types.Mixed,default:{}}},{timestamps:!0}),a=t.default.models.Branch||t.default.model("Branch",r);e.s(["default",0,a])},270406,(e,t,r)=>{t.exports=e.x("next/dist/compiled/@opentelemetry/api",()=>require("next/dist/compiled/@opentelemetry/api"))},193695,(e,t,r)=>{t.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},926046,(e,t,r)=>{t.exports=e.x("mongoose",()=>require("mongoose"))},300794,(e,t,r)=>{t.exports=e.x("node:dns/promises",()=>require("node:dns/promises"))},87170,e=>{"use strict";var t=e.i(300794),r=e.i(926046);t.default.setServers(["8.8.8.8","8.8.4.4"]);let a=process.env.MONGODB_URI,s="true"!==process.env.ENABLE_REAL_DB||!a,i=e.g.mongoose;async function d(){if(s)return null;if(i.conn)return i.conn;i.promise||(i.promise=r.default.connect(a,{bufferCommands:!1}).then(e=>(console.log("✅ MongoDB connected successfully"),e)));try{i.conn=await i.promise}catch(e){throw i.promise=null,e}return i.conn}function n(){return s}i||(i=e.g.mongoose={conn:null,promise:null}),e.s(["default",0,d,"isMockMode",()=>n])},254799,(e,t,r)=>{t.exports=e.x("crypto",()=>require("crypto"))},688947,(e,t,r)=>{t.exports=e.x("stream",()=>require("stream"))},500874,(e,t,r)=>{t.exports=e.x("buffer",()=>require("buffer"))},482143,e=>{"use strict";var t=e.i(926046);let r=new t.default.Schema({name:{type:String,required:!0,trim:!0},gradeNumber:{type:Number},levelId:{type:t.default.Schema.Types.ObjectId,ref:"Level"},code:{type:String,trim:!0},academicYear:{type:t.default.Schema.Types.ObjectId,ref:"AcademicYear"},description:String,createdBy:{type:t.default.Schema.Types.ObjectId,ref:"User"},updatedBy:{type:t.default.Schema.Types.ObjectId,ref:"User"}},{timestamps:!0});r.index({levelId:1}),r.index({gradeNumber:1});let a=t.default.models.Grade||t.default.model("Grade",r);e.s(["default",0,a])},979982,e=>{"use strict";var t=e.i(926046);e.i(482143);let r=new t.default.Schema({name:{type:String,required:[!0,"Class name is required"],trim:!0},code:{type:String,required:[!0,"Class code is required"],unique:!0,uppercase:!0,trim:!0},grade:{type:t.default.Schema.Types.ObjectId,ref:"Grade",required:[!0,"Grade is required"]},sections:[{name:{type:String,required:!0,trim:!0},capacity:{type:Number,default:40,min:1},classTeacherId:{type:t.default.Schema.Types.ObjectId,ref:"User"},roomNumber:{type:String,trim:!0}}],branchId:{type:t.default.Schema.Types.ObjectId,ref:"Branch",required:[!0,"Branch is required"]},academicYear:{type:t.default.Schema.Types.ObjectId,ref:"AcademicYear",required:[!0,"Academic year is required"]},subjects:[{type:t.default.Schema.Types.ObjectId,ref:"Subject"}],feeTemplates:[{type:t.default.Schema.Types.ObjectId,ref:"FeeTemplate"}],description:{type:String,trim:!0},status:{type:String,enum:["active","inactive","archived"],default:"active"},createdBy:{type:t.default.Schema.Types.ObjectId,ref:"User"},updatedBy:{type:t.default.Schema.Types.ObjectId,ref:"User"}},{timestamps:!0});r.index({branchId:1}),r.index({academicYear:1}),r.index({grade:1});let a=t.default.models.Class||t.default.model("Class",r);e.s(["default",0,a])},504446,(e,t,r)=>{t.exports=e.x("net",()=>require("net"))},168914,e=>{"use strict";var t=e.i(926046);let r=new t.default.Schema({name:{type:String,required:!0,trim:!0},code:{type:String,required:!0,unique:!0,uppercase:!0,trim:!0},description:String,headTeacherId:{type:t.default.Schema.Types.ObjectId,ref:"User"},branchId:{type:t.default.Schema.Types.ObjectId,ref:"Branch",required:!0},teachers:[{type:t.default.Schema.Types.ObjectId,ref:"User"}],subjects:[{type:t.default.Schema.Types.ObjectId,ref:"Subject"}],officeLocation:String,officeHours:String,budget:{allocatedAmount:{type:Number,default:0},spentAmount:{type:Number,default:0},year:Number},academicYears:[String],programsOffered:[String],classrooms:Number,labRooms:Number,librarySection:String,specialFacilities:[String],departmentGoals:[String],achievements:[{title:String,date:Date,description:String}],hod:{name:String,office:String},status:{type:String,enum:["active","inactive","archived"],default:"active"},remarks:String,createdBy:{type:t.default.Schema.Types.ObjectId,ref:"User"},updatedBy:{type:t.default.Schema.Types.ObjectId,ref:"User"}},{timestamps:!0});r.index({code:1}),r.index({branchId:1}),r.index({headTeacherId:1}),r.index({status:1}),r.set("toJSON",{virtuals:!0}),r.set("toObject",{virtuals:!0});let a=t.default.models.Department||t.default.model("Department",r);e.s(["default",0,a])},725677,e=>{"use strict";e.s(["getStudentEmailTemplate",0,(e,t,r="Ease Academy")=>{let a=`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #333;
    line-height: 1.6;
  `,s=`
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
  `,n=`
    background: white;
    padding: 20px;
    border-radius: 4px;
    margin: 20px 0;
    border-left: 4px solid #667eea;
  `,o=`
    background: #f0f0f0;
    padding: 20px;
    text-align: center;
    font-size: 12px;
    color: #666;
    border-top: 1px solid #ddd;
  `,l=`
    <div style="${n}">
      <h4 style="margin-top: 0; color: #667eea;">Student Information</h4>
      <table style="width: 100%; font-size: 14px;">
        <tr>
          <td style="padding: 8px 0; font-weight: bold; width: 40%;">Name:</td>
          <td style="padding: 8px 0;">${t.firstName} ${t.lastName}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold;">Registration No:</td>
          <td style="padding: 8px 0;">${t.studentProfile?.registrationNumber||"N/A"}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold;">Roll Number:</td>
          <td style="padding: 8px 0;">${t.studentProfile?.rollNumber||"N/A"}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold;">Email:</td>
          <td style="padding: 8px 0;">${t.email||"N/A"}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
          <td style="padding: 8px 0;">${t.phone||"N/A"}</td>
        </tr>
      </table>
    </div>
  `;if("STUDENT_CREATED"===e)return`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { ${a} }
          .container { ${i} }
          .header { ${s} }
          .content { ${d} }
          .details { ${n} }
          .footer { ${o} }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 style="margin: 0; font-size: 28px;">🎓 ${r}</h2>
            <p style="margin: 10px 0 0 0; font-size: 14px;">Student Enrollment Confirmation</p>
          </div>
          
          <div class="content">
            <p style="margin-top: 0; font-size: 16px; font-weight: 500;">Dear Parent/Guardian,</p>
            
            <p>We are delighted to inform you that <strong>${t.firstName} ${t.lastName}</strong> has been successfully enrolled in ${r}.</p>
            
            ${l}
            
            <div style="${n}">
              <h4 style="margin-top: 0; color: #667eea;">Academic Details</h4>
              <table style="width: 100%; font-size: 14px;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; width: 40%;">Class:</td>
                  <td style="padding: 8px 0;">${t.studentProfile?.classId?.name||"N/A"}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Section:</td>
                  <td style="padding: 8px 0;">${t.studentProfile?.section||"N/A"}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Admission Date:</td>
                  <td style="padding: 8px 0;">${new Date(t.studentProfile?.admissionDate||new Date).toLocaleDateString()}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Academic Year:</td>
                  <td style="padding: 8px 0;">${t.studentProfile?.academicYear||"N/A"}</td>
                </tr>
              </table>
            </div>
            
            <p style="margin: 20px 0; color: #666; font-size: 14px;">Please keep this enrollment confirmation for your records. If you have any questions or concerns, please don't hesitate to contact us.</p>
            
            <p style="margin: 20px 0 0 0;">Best regards,<br><strong>${r} Administration</strong></p>
          </div>
          
          <div class="footer">
            <p style="margin: 0;">This is an automated email. Please do not reply to this message.</p>
            <p style="margin: 5px 0 0 0;">&copy; ${new Date().getFullYear()} ${r}. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;if("STUDENT_UPDATED"===e)return`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { ${a} }
          .container { ${i} }
          .header { ${s} }
          .content { ${d} }
          .details { ${n} }
          .footer { ${o} }
          .alert { background: #ffeaa7; padding: 15px; border-radius: 4px; margin: 15px 0; border-left: 4px solid #fdcb6e; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 style="margin: 0; font-size: 28px;">📝 ${r}</h2>
            <p style="margin: 10px 0 0 0; font-size: 14px;">Student Record Updated</p>
          </div>
          
          <div class="content">
            <p style="margin-top: 0; font-size: 16px; font-weight: 500;">Dear Parent/Guardian,</p>
            
            <p>This is to notify you that the enrollment record of <strong>${t.firstName} ${t.lastName}</strong> has been updated.</p>
            
            <div class="alert">
              <strong>⚠️ Important:</strong> Please review the updated information below to ensure all details are correct.
            </div>
            
            ${l}
            
            <div style="${n}">
              <h4 style="margin-top: 0; color: #667eea;">Updated Academic Details</h4>
              <table style="width: 100%; font-size: 14px;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; width: 40%;">Class:</td>
                  <td style="padding: 8px 0;">${t.studentProfile?.classId?.name||"N/A"}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Section:</td>
                  <td style="padding: 8px 0;">${t.studentProfile?.section||"N/A"}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Status:</td>
                  <td style="padding: 8px 0;"><strong style="color: ${"active"===t.status?"#27ae60":"#e74c3c"};">${t.status?.toUpperCase()}</strong></td>
                </tr>
              </table>
            </div>
            
            <p style="margin: 20px 0; color: #666; font-size: 14px;">If you believe this update was made in error, please contact the school administration immediately.</p>
            
            <p style="margin: 20px 0 0 0;">Best regards,<br><strong>${r} Administration</strong></p>
          </div>
          
          <div class="footer">
            <p style="margin: 0;">This is an automated email. Please do not reply to this message.</p>
            <p style="margin: 5px 0 0 0;">&copy; ${new Date().getFullYear()} ${r}. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;if("STUDENT_DEACTIVATED"===e)return`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { ${a} }
          .container { ${i} }
          .header { ${s} }
          .content { ${d} }
          .details { ${n} }
          .footer { ${o} }
          .alert { background: #fab1a0; padding: 15px; border-radius: 4px; margin: 15px 0; border-left: 4px solid #d63031; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header" style="background: linear-gradient(135deg, #d63031 0%, #e17055 100%);">
            <h2 style="margin: 0; font-size: 28px;">⚠️ ${r}</h2>
            <p style="margin: 10px 0 0 0; font-size: 14px;">Student Account Deactivated</p>
          </div>
          
          <div class="content">
            <p style="margin-top: 0; font-size: 16px; font-weight: 500;">Dear Parent/Guardian,</p>
            
            <div class="alert">
              <strong>Important Notice:</strong> The enrollment record of <strong>${t.firstName} ${t.lastName}</strong> has been deactivated.
            </div>
            
            <p>The student's account status has been changed to <strong>INACTIVE</strong>. This means:</p>
            <ul style="margin: 15px 0; padding-left: 20px;">
              <li>The student will not have access to the school system</li>
              <li>Records will be archived for future reference</li>
              <li>To reactivate, please contact school administration</li>
            </ul>
            
            ${l}
            
            <div style="${n}">
              <h4 style="margin-top: 0; color: #d63031;">Current Status</h4>
              <table style="width: 100%; font-size: 14px;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; width: 40%;">Account Status:</td>
                  <td style="padding: 8px 0;"><strong style="color: #e74c3c;">DEACTIVATED</strong></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Deactivation Date:</td>
                  <td style="padding: 8px 0;">${new Date().toLocaleDateString()}</td>
                </tr>
              </table>
            </div>
            
            <p style="margin: 20px 0; color: #666; font-size: 14px;">If you wish to reactivate this account, please contact the school administration office.</p>
            
            <p style="margin: 20px 0 0 0;">Best regards,<br><strong>${r} Administration</strong></p>
          </div>
          
          <div class="footer">
            <p style="margin: 0;">This is an automated email. Please do not reply to this message.</p>
            <p style="margin: 5px 0 0 0;">&copy; ${new Date().getFullYear()} ${r}. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;if("fee_voucher_generated"===e){let{voucherNumber:e,amount:l,dueDate:p,month:c,year:u,category:m,discountAmount:g,lateFeeAmount:f,totalAmount:h}=t;return`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Fee Voucher Generated</title>
      </head>
      <body style="${a}">
        <div style="${i}">
          <div style="${s}">
            <h1 style="margin: 0; font-size: 28px;">💳 Fee Voucher Generated</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">${r}</p>
          </div>
          
          <div style="${d}">
            <p>Dear <strong>${t.studentName||t.name}</strong>,</p>
            
            <div style="${n}">
              <strong>Your fee voucher has been generated successfully!</strong>
            </div>
            
            <div style="${n}">
              <h4 style="margin-top: 0; color: #667eea;">Voucher Details</h4>
              <table style="width: 100%; font-size: 14px;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; width: 40%;">Voucher Number:</td>
                  <td style="padding: 8px 0;"><strong style="color: #667eea;">${e}</strong></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Fee Category:</td>
                  <td style="padding: 8px 0;">${m||"Monthly Fee"}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Month/Year:</td>
                  <td style="padding: 8px 0;">${c}/${u}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Base Amount:</td>
                  <td style="padding: 8px 0;">Rs. ${l?.toLocaleString()}</td>
                </tr>
                ${g>0?`
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #27ae60;">Discount:</td>
                  <td style="padding: 8px 0; color: #27ae60;">- Rs. ${g?.toLocaleString()}</td>
                </tr>
                `:""}
                ${f>0?`
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #e74c3c;">Late Fee:</td>
                  <td style="padding: 8px 0; color: #e74c3c;">+ Rs. ${f?.toLocaleString()}</td>
                </tr>
                `:""}
                <tr style="border-top: 2px solid #667eea;">
                  <td style="padding: 12px 0; font-weight: bold; font-size: 16px;">Total Amount:</td>
                  <td style="padding: 12px 0; font-weight: bold; font-size: 16px; color: #667eea;">Rs. ${h?.toLocaleString()}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Due Date:</td>
                  <td style="padding: 8px 0; color: #e74c3c;"><strong>${new Date(p).toLocaleDateString()}</strong></td>
                </tr>
              </table>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="http://localhost:3000/api/super-admin/fee-vouchers/${t.voucherId||e}/download" 
                 style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                📄 Download Fee Voucher
              </a>
            </div>
            
            ${f>0?`
            <div style="background: #fff3cd; padding: 15px; border-radius: 4px; margin: 20px 0; border-left: 4px solid #ffc107;">
              <strong style="color: #856404;">⚠️ Late Fee Applied:</strong>
              <p style="margin: 5px 0 0 0; color: #856404;">A late fee of Rs. ${f?.toLocaleString()} has been added due to previous unpaid fees.</p>
            </div>
            `:""}
            
            <div style="background: #d1ecf1; padding: 15px; border-radius: 4px; margin: 20px 0; border-left: 4px solid #17a2b8;">
              <strong style="color: #0c5460;">💡 Payment Instructions:</strong>
              <ul style="margin: 10px 0; padding-left: 20px; color: #0c5460;">
                <li>Please pay before the due date to avoid late fees</li>
                <li>Quote your voucher number when making payment</li>
                <li>Payment can be made at the school office or online</li>
                <li>Keep the payment receipt for your records</li>
              </ul>
            </div>
            
            <p style="margin: 20px 0 0 0;">For any queries, please contact the accounts department.</p>
            <p style="margin: 10px 0 0 0;">Best regards,<br><strong>${r} Accounts Department</strong></p>
          </div>
          
          <div style="${o}">
            <p style="margin: 0;">This is an automated email. Please do not reply to this message.</p>
            <p style="margin: 5px 0 0 0;">&copy; ${new Date().getFullYear()} ${r}. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `}if("exam_scheduled"===e){let{studentName:e,examTitle:r,examType:l,examDate:p,subjectNames:c,className:u,schoolName:m}=t;return`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { ${a} }
          .container { ${i} }
          .header { ${s} }
          .content { ${d} }
          .details { ${n} }
          .footer { ${o} }
          .exam-alert { background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 4px; margin: 15px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 style="margin: 0; font-size: 28px;">📚 ${m}</h2>
            <p style="margin: 10px 0 0 0; font-size: 14px;">Exam Schedule Notification</p>
          </div>

          <div class="content">
            <p style="margin-top: 0; font-size: 16px; font-weight: 500;">Dear ${e},</p>

            <div class="exam-alert">
              <strong>📅 New Exam Scheduled</strong>
            </div>

            <p>A new examination has been scheduled for your class. Please find the details below:</p>

            <div style="${n}">
              <h4 style="margin-top: 0; color: #667eea;">Exam Details</h4>
              <table style="width: 100%; font-size: 14px;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; width: 40%;">Exam Title:</td>
                  <td style="padding: 8px 0;">${r}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Exam Type:</td>
                  <td style="padding: 8px 0;">${l.replace("_"," ").toUpperCase()}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Class:</td>
                  <td style="padding: 8px 0;">${u}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Exam Date:</td>
                  <td style="padding: 8px 0;"><strong style="color: #e74c3c;">${p}</strong></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Subjects:</td>
                  <td style="padding: 8px 0;">${c}</td>
                </tr>
              </table>
            </div>

            <div style="${n}">
              <h4 style="margin-top: 0; color: #667eea;">Important Instructions</h4>
              <ul style="margin: 8px 0; padding-left: 20px;">
                <li>Make sure to arrive at least 15 minutes before the exam time</li>
                <li>Bring all necessary stationery and admit card</li>
                <li>Check the exam schedule regularly for any updates</li>
                <li>Contact your class teacher if you have any concerns</li>
              </ul>
            </div>

            <p style="margin: 20px 0; color: #666; font-size: 14px;">Best of luck for your examination! If you have any questions, please contact your class teacher or school administration.</p>

            <p style="margin: 20px 0 0 0;">Best regards,<br><strong>${m} Administration</strong></p>
          </div>

          <div class="footer">
            <p style="margin: 0;">This is an automated email. Please do not reply to this message.</p>
            <p style="margin: 5px 0 0 0;">&copy; ${new Date().getFullYear()} ${m}. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `}return"<html><body><p>Hello,</p><p>Student record updated.</p></body></html>"}])},687170,e=>{"use strict";var t=e.i(926046);let r=new t.default.Schema({_id:{type:String,required:!0},seq:{type:Number,default:0}},{timestamps:!0}),a=t.default.models.Counter||t.default.model("Counter",r);e.s(["default",0,a])},161942,e=>{"use strict";var t=e.i(747909),r=e.i(174017),a=e.i(996250),s=e.i(759756),i=e.i(561916),d=e.i(114444),n=e.i(837092),o=e.i(869741),l=e.i(316795),p=e.i(487718),c=e.i(995169),u=e.i(47587),m=e.i(666012),g=e.i(570101),f=e.i(626937),h=e.i(10372),y=e.i(193695);e.i(52474);var x=e.i(600220),b=e.i(89171),v=e.i(513637),w=e.i(722511),S=e.i(87170),$=e.i(838026),N=e.i(356780),T=e.i(687170),E=e.i(586312),I=e.i(725677);e.i(518041),e.i(168914),e.i(979982),e.i(449632);let P=(0,v.withAuth)(async(e,t,r)=>{try{await (0,S.default)();let t=await e.json();for(let e of["firstName","lastName","dateOfBirth","gender","branchId"])if(!t[e])return b.NextResponse.json({success:!1,message:`${e} is required`},{status:400});if(!t.studentProfile||!t.studentProfile.classId)return b.NextResponse.json({success:!1,message:"Class is required for students"},{status:400});if(await w.default.findOne({email:t.email?.toLowerCase()}))return b.NextResponse.json({success:!1,message:"Email already exists"},{status:400});let a=t.password||"Password@123",s=new w.default({role:"student",firstName:t.firstName,lastName:t.lastName,email:t.email,phone:t.phone,dateOfBirth:t.dateOfBirth,gender:t.gender,bloodGroup:t.bloodGroup,nationality:t.nationality,cnic:t.cnic,address:t.address,branchId:t.branchId,status:t.status||"active",remarks:t.remarks,passwordHash:a,studentProfile:{classId:t.studentProfile.classId,departmentId:t.studentProfile.departmentId,section:t.studentProfile.section,rollNumber:t.studentProfile.rollNumber,admissionDate:t.studentProfile.admissionDate,academicYear:t.studentProfile.academicYear,previousSchool:t.studentProfile.previousSchool,father:t.studentProfile.father,mother:t.studentProfile.mother,guardian:t.studentProfile.guardian,feeDiscount:t.studentProfile.feeDiscount,transportFee:t.studentProfile.transportFee},createdBy:r._id,updatedBy:r._id});await s.save();try{if(!s.studentProfile?.rollNumber&&s.studentProfile?.classId){let e=s.studentProfile.academicYear||new Date().getFullYear().toString(),t=`roll_${s.branchId}_${s.studentProfile.classId}_${e}`,r=(await T.default.findOneAndUpdate({_id:t},{$inc:{seq:1}},{new:!0,upsert:!0})).seq||1;s.studentProfile.rollNumber=String(r).padStart(6,"0"),await s.save()}}catch(e){console.error("Error generating atomic roll number:",e)}try{let e={id:s._id,registrationNumber:s.studentProfile?.registrationNumber,rollNumber:s.studentProfile?.rollNumber,firstName:s.firstName,lastName:s.lastName,branchId:s.branchId,classId:s.studentProfile?.classId},t=await $.default.toDataURL(JSON.stringify(e),{errorCorrectionLevel:"H",type:"image/png",width:350}),r=await (0,N.uploadToCloudinary)(t,{folder:`ease-academy/students/${s._id}/qr`,resourceType:"image"});s.studentProfile=s.studentProfile||{},s.studentProfile.qr={url:r.url,publicId:r.publicId,uploadedAt:new Date},await s.save()}catch(e){console.error("QR generation/upload failed:",e)}if(await s.populate([{path:"branchId",select:"name code city"},{path:"studentProfile.classId",select:"name grade"},{path:"studentProfile.departmentId",select:"name code"},{path:"createdBy",select:"fullName email"}]),s.email)try{let e=(0,I.getStudentEmailTemplate)("STUDENT_CREATED",s.toObject());await (0,E.sendEmail)(s.email,"🎓 Welcome to Ease Academy - Enrollment Confirmation",e)}catch(e){console.error("Email sending failed (non-blocking):",e)}return b.NextResponse.json({success:!0,message:"Student created successfully",data:s},{status:201})}catch(e){return console.error("Error creating student:",e),b.NextResponse.json({success:!1,message:"Failed to create student",error:e.message},{status:500})}});e.s(["POST",0,P],756859);var A=e.i(756859);let R=new t.AppRouteRouteModule({definition:{kind:r.RouteKind.APP_ROUTE,page:"/api/users/students/route",pathname:"/api/users/students",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/src/app/api/users/students/route.js",nextConfigOutput:"",userland:A}),{workAsyncStorage:D,workUnitAsyncStorage:q,serverHooks:C}=R;function O(){return(0,a.patchFetch)({workAsyncStorage:D,workUnitAsyncStorage:q})}async function j(e,t,a){R.isDev&&(0,s.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let b="/api/users/students/route";b=b.replace(/\/index$/,"")||"/";let v=await R.prepare(e,t,{srcPage:b,multiZoneDraftMode:!1});if(!v)return t.statusCode=400,t.end("Bad Request"),null==a.waitUntil||a.waitUntil.call(a,Promise.resolve()),null;let{buildId:w,params:S,nextConfig:$,parsedUrl:N,isDraftMode:T,prerenderManifest:E,routerServerContext:I,isOnDemandRevalidate:P,revalidateOnlyGenerated:A,resolvedPathname:D,clientReferenceManifest:q,serverActionsManifest:C}=v,O=(0,o.normalizeAppPath)(b),j=!!(E.dynamicRoutes[O]||E.routes[D]),k=async()=>((null==I?void 0:I.render404)?await I.render404(e,t,N,!1):t.end("This page could not be found"),null);if(j&&!T){let e=!!E.routes[D],t=E.dynamicRoutes[O];if(t&&!1===t.fallback&&!e){if($.experimental.adapterPath)return await k();throw new y.NoFallbackError}}let U=null;!j||R.isDev||T||(U="/index"===(U=D)?"/":U);let _=!0===R.isDev||!j,B=j&&!_;C&&q&&(0,d.setReferenceManifestsSingleton)({page:b,clientReferenceManifest:q,serverActionsManifest:C,serverModuleMap:(0,n.createServerModuleMap)({serverActionsManifest:C})});let F=e.method||"GET",z=(0,i.getTracer)(),M=z.getActiveScopeSpan(),Y={params:S,prerenderManifest:E,renderOpts:{experimental:{authInterrupts:!!$.experimental.authInterrupts},cacheComponents:!!$.cacheComponents,supportsDynamicResponse:_,incrementalCache:(0,s.getRequestMeta)(e,"incrementalCache"),cacheLifeProfiles:$.cacheLife,waitUntil:a.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,r,a)=>R.onRequestError(e,t,a,I)},sharedContext:{buildId:w}},L=new l.NodeNextRequest(e),H=new l.NodeNextResponse(t),G=p.NextRequestAdapter.fromNodeNextRequest(L,(0,p.signalFromNodeResponse)(t));try{let d=async e=>R.handle(G,Y).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let r=z.getRootSpanAttributes();if(!r)return;if(r.get("next.span_type")!==c.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${r.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let a=r.get("next.route");if(a){let t=`${F} ${a}`;e.setAttributes({"next.route":a,"http.route":a,"next.span_name":t}),e.updateName(t)}else e.updateName(`${F} ${b}`)}),n=!!(0,s.getRequestMeta)(e,"minimalMode"),o=async s=>{var i,o;let l=async({previousCacheEntry:r})=>{try{if(!n&&P&&A&&!r)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let i=await d(s);e.fetchMetrics=Y.renderOpts.fetchMetrics;let o=Y.renderOpts.pendingWaitUntil;o&&a.waitUntil&&(a.waitUntil(o),o=void 0);let l=Y.renderOpts.collectedTags;if(!j)return await (0,m.sendResponse)(L,H,i,Y.renderOpts.pendingWaitUntil),null;{let e=await i.blob(),t=(0,g.toNodeOutgoingHttpHeaders)(i.headers);l&&(t[h.NEXT_CACHE_TAGS_HEADER]=l),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let r=void 0!==Y.renderOpts.collectedRevalidate&&!(Y.renderOpts.collectedRevalidate>=h.INFINITE_CACHE)&&Y.renderOpts.collectedRevalidate,a=void 0===Y.renderOpts.collectedExpire||Y.renderOpts.collectedExpire>=h.INFINITE_CACHE?void 0:Y.renderOpts.collectedExpire;return{value:{kind:x.CachedRouteKind.APP_ROUTE,status:i.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:r,expire:a}}}}catch(t){throw(null==r?void 0:r.isStale)&&await R.onRequestError(e,t,{routerKind:"App Router",routePath:b,routeType:"route",revalidateReason:(0,u.getRevalidateReason)({isStaticGeneration:B,isOnDemandRevalidate:P})},I),t}},p=await R.handleResponse({req:e,nextConfig:$,cacheKey:U,routeKind:r.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:E,isRoutePPREnabled:!1,isOnDemandRevalidate:P,revalidateOnlyGenerated:A,responseGenerator:l,waitUntil:a.waitUntil,isMinimalMode:n});if(!j)return null;if((null==p||null==(i=p.value)?void 0:i.kind)!==x.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==p||null==(o=p.value)?void 0:o.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});n||t.setHeader("x-nextjs-cache",P?"REVALIDATED":p.isMiss?"MISS":p.isStale?"STALE":"HIT"),T&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let c=(0,g.fromNodeOutgoingHttpHeaders)(p.value.headers);return n&&j||c.delete(h.NEXT_CACHE_TAGS_HEADER),!p.cacheControl||t.getHeader("Cache-Control")||c.get("Cache-Control")||c.set("Cache-Control",(0,f.getCacheControlHeader)(p.cacheControl)),await (0,m.sendResponse)(L,H,new Response(p.value.body,{headers:c,status:p.value.status||200})),null};M?await o(M):await z.withPropagatedContext(e.headers,()=>z.trace(c.BaseServerSpan.handleRequest,{spanName:`${F} ${b}`,kind:i.SpanKind.SERVER,attributes:{"http.method":F,"http.target":e.url}},o))}catch(t){if(t instanceof y.NoFallbackError||await R.onRequestError(e,t,{routerKind:"App Router",routePath:O,routeType:"route",revalidateReason:(0,u.getRevalidateReason)({isStaticGeneration:B,isOnDemandRevalidate:P})}),j)throw t;return await (0,m.sendResponse)(L,H,new Response(null,{status:500})),null}}e.s(["handler",()=>j,"patchFetch",()=>O,"routeModule",()=>R,"serverHooks",()=>C,"workAsyncStorage",()=>D,"workUnitAsyncStorage",()=>q],161942)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__ea313e33._.js.map