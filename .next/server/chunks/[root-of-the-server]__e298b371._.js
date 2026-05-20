module.exports=[446786,(e,t,r)=>{t.exports=e.x("os",()=>require("os"))},427699,(e,t,r)=>{t.exports=e.x("events",()=>require("events"))},814747,(e,t,r)=>{t.exports=e.x("path",()=>require("path"))},522734,(e,t,r)=>{t.exports=e.x("fs",()=>require("fs"))},792509,(e,t,r)=>{t.exports=e.x("url",()=>require("url"))},921517,(e,t,r)=>{t.exports=e.x("http",()=>require("http"))},524836,(e,t,r)=>{t.exports=e.x("https",()=>require("https"))},406461,(e,t,r)=>{t.exports=e.x("zlib",()=>require("zlib"))},918622,(e,t,r)=>{t.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},556704,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},832319,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},324725,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},224361,(e,t,r)=>{t.exports=e.x("util",()=>require("util"))},518041,e=>{"use strict";var t=e.i(926046);let r=new t.default.Schema({name:{type:String,required:[!0,"Branch name is required"],trim:!0},code:{type:String,required:[!0,"Branch code is required"],unique:!0,uppercase:!0,trim:!0},address:{street:String,city:String,state:String,zipCode:String,country:String},contact:{phone:String,email:String},location:{latitude:Number,longitude:Number,address:String},bankAccounts:[{accountTitle:String,serviceName:String,accountNo:String,iban:String,isDefault:{type:Boolean,default:!1}}],admin:{type:t.default.Schema.Types.ObjectId,ref:"User",default:null},status:{type:String,enum:["active","inactive"],default:"active"},settings:{type:Map,of:t.default.Schema.Types.Mixed,default:{}}},{timestamps:!0}),a=t.default.models.Branch||t.default.model("Branch",r);e.s(["default",0,a])},270406,(e,t,r)=>{t.exports=e.x("next/dist/compiled/@opentelemetry/api",()=>require("next/dist/compiled/@opentelemetry/api"))},193695,(e,t,r)=>{t.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},926046,(e,t,r)=>{t.exports=e.x("mongoose",()=>require("mongoose"))},300794,(e,t,r)=>{t.exports=e.x("node:dns/promises",()=>require("node:dns/promises"))},87170,e=>{"use strict";var t=e.i(300794),r=e.i(926046);t.default.setServers(["8.8.8.8","8.8.4.4"]);let a=process.env.MONGODB_URI,d="true"!==process.env.ENABLE_REAL_DB||!a,i=e.g.mongoose;async function s(){if(d)return null;if(i.conn)return i.conn;i.promise||(i.promise=r.default.connect(a,{bufferCommands:!1}).then(e=>(console.log("✅ MongoDB connected successfully"),e)));try{i.conn=await i.promise}catch(e){throw i.promise=null,e}return i.conn}function o(){return d}i||(i=e.g.mongoose={conn:null,promise:null}),e.s(["default",0,s,"isMockMode",()=>o])},254799,(e,t,r)=>{t.exports=e.x("crypto",()=>require("crypto"))},688947,(e,t,r)=>{t.exports=e.x("stream",()=>require("stream"))},500874,(e,t,r)=>{t.exports=e.x("buffer",()=>require("buffer"))},482143,e=>{"use strict";var t=e.i(926046);let r=new t.default.Schema({name:{type:String,required:!0,trim:!0},gradeNumber:{type:Number},levelId:{type:t.default.Schema.Types.ObjectId,ref:"Level"},code:{type:String,trim:!0},academicYear:{type:t.default.Schema.Types.ObjectId,ref:"AcademicYear"},description:String,createdBy:{type:t.default.Schema.Types.ObjectId,ref:"User"},updatedBy:{type:t.default.Schema.Types.ObjectId,ref:"User"}},{timestamps:!0});r.index({levelId:1}),r.index({gradeNumber:1});let a=t.default.models.Grade||t.default.model("Grade",r);e.s(["default",0,a])},979982,e=>{"use strict";var t=e.i(926046);e.i(482143);let r=new t.default.Schema({name:{type:String,required:[!0,"Class name is required"],trim:!0},code:{type:String,required:[!0,"Class code is required"],unique:!0,uppercase:!0,trim:!0},grade:{type:t.default.Schema.Types.ObjectId,ref:"Grade",required:[!0,"Grade is required"]},sections:[{name:{type:String,required:!0,trim:!0},capacity:{type:Number,default:40,min:1},classTeacherId:{type:t.default.Schema.Types.ObjectId,ref:"User"},roomNumber:{type:String,trim:!0}}],branchId:{type:t.default.Schema.Types.ObjectId,ref:"Branch",required:[!0,"Branch is required"]},academicYear:{type:t.default.Schema.Types.ObjectId,ref:"AcademicYear",required:[!0,"Academic year is required"]},subjects:[{type:t.default.Schema.Types.ObjectId,ref:"Subject"}],feeTemplates:[{type:t.default.Schema.Types.ObjectId,ref:"FeeTemplate"}],description:{type:String,trim:!0},status:{type:String,enum:["active","inactive","archived"],default:"active"},createdBy:{type:t.default.Schema.Types.ObjectId,ref:"User"},updatedBy:{type:t.default.Schema.Types.ObjectId,ref:"User"}},{timestamps:!0});r.index({branchId:1}),r.index({academicYear:1}),r.index({grade:1});let a=t.default.models.Class||t.default.model("Class",r);e.s(["default",0,a])},504446,(e,t,r)=>{t.exports=e.x("net",()=>require("net"))},168914,e=>{"use strict";var t=e.i(926046);let r=new t.default.Schema({name:{type:String,required:!0,trim:!0},code:{type:String,required:!0,unique:!0,uppercase:!0,trim:!0},description:String,headTeacherId:{type:t.default.Schema.Types.ObjectId,ref:"User"},branchId:{type:t.default.Schema.Types.ObjectId,ref:"Branch",required:!0},teachers:[{type:t.default.Schema.Types.ObjectId,ref:"User"}],subjects:[{type:t.default.Schema.Types.ObjectId,ref:"Subject"}],officeLocation:String,officeHours:String,budget:{allocatedAmount:{type:Number,default:0},spentAmount:{type:Number,default:0},year:Number},academicYears:[String],programsOffered:[String],classrooms:Number,labRooms:Number,librarySection:String,specialFacilities:[String],departmentGoals:[String],achievements:[{title:String,date:Date,description:String}],hod:{name:String,office:String},status:{type:String,enum:["active","inactive","archived"],default:"active"},remarks:String,createdBy:{type:t.default.Schema.Types.ObjectId,ref:"User"},updatedBy:{type:t.default.Schema.Types.ObjectId,ref:"User"}},{timestamps:!0});r.index({code:1}),r.index({branchId:1}),r.index({headTeacherId:1}),r.index({status:1}),r.set("toJSON",{virtuals:!0}),r.set("toObject",{virtuals:!0});let a=t.default.models.Department||t.default.model("Department",r);e.s(["default",0,a])},725677,e=>{"use strict";e.s(["getStudentEmailTemplate",0,(e,t,r="Ease Academy")=>{let a=`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #333;
    line-height: 1.6;
  `,d=`
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
  `,s=`
    padding: 30px;
    background: #f9f9f9;
  `,o=`
    background: white;
    padding: 20px;
    border-radius: 4px;
    margin: 20px 0;
    border-left: 4px solid #667eea;
  `,n=`
    background: #f0f0f0;
    padding: 20px;
    text-align: center;
    font-size: 12px;
    color: #666;
    border-top: 1px solid #ddd;
  `,l=`
    <div style="${o}">
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
          .header { ${d} }
          .content { ${s} }
          .details { ${o} }
          .footer { ${n} }
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
            
            <div style="${o}">
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
          .header { ${d} }
          .content { ${s} }
          .details { ${o} }
          .footer { ${n} }
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
            
            <div style="${o}">
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
          .header { ${d} }
          .content { ${s} }
          .details { ${o} }
          .footer { ${n} }
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
            
            <div style="${o}">
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
    `;if("fee_voucher_generated"===e){let{voucherNumber:e,amount:l,dueDate:p,month:c,year:g,category:m,discountAmount:y,lateFeeAmount:u,totalAmount:h}=t;return`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Fee Voucher Generated</title>
      </head>
      <body style="${a}">
        <div style="${i}">
          <div style="${d}">
            <h1 style="margin: 0; font-size: 28px;">💳 Fee Voucher Generated</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">${r}</p>
          </div>
          
          <div style="${s}">
            <p>Dear <strong>${t.studentName||t.name}</strong>,</p>
            
            <div style="${o}">
              <strong>Your fee voucher has been generated successfully!</strong>
            </div>
            
            <div style="${o}">
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
                  <td style="padding: 8px 0;">${c}/${g}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Base Amount:</td>
                  <td style="padding: 8px 0;">Rs. ${l?.toLocaleString()}</td>
                </tr>
                ${y>0?`
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #27ae60;">Discount:</td>
                  <td style="padding: 8px 0; color: #27ae60;">- Rs. ${y?.toLocaleString()}</td>
                </tr>
                `:""}
                ${u>0?`
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #e74c3c;">Late Fee:</td>
                  <td style="padding: 8px 0; color: #e74c3c;">+ Rs. ${u?.toLocaleString()}</td>
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
            
            ${u>0?`
            <div style="background: #fff3cd; padding: 15px; border-radius: 4px; margin: 20px 0; border-left: 4px solid #ffc107;">
              <strong style="color: #856404;">⚠️ Late Fee Applied:</strong>
              <p style="margin: 5px 0 0 0; color: #856404;">A late fee of Rs. ${u?.toLocaleString()} has been added due to previous unpaid fees.</p>
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
          
          <div style="${n}">
            <p style="margin: 0;">This is an automated email. Please do not reply to this message.</p>
            <p style="margin: 5px 0 0 0;">&copy; ${new Date().getFullYear()} ${r}. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `}if("exam_scheduled"===e){let{studentName:e,examTitle:r,examType:l,examDate:p,subjectNames:c,className:g,schoolName:m}=t;return`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { ${a} }
          .container { ${i} }
          .header { ${d} }
          .content { ${s} }
          .details { ${o} }
          .footer { ${n} }
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

            <div style="${o}">
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
                  <td style="padding: 8px 0;">${g}</td>
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

            <div style="${o}">
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
    `}return"<html><body><p>Hello,</p><p>Student record updated.</p></body></html>"}])},391599,e=>{"use strict";e.s(["getAdminEmailTemplate",0,(e,t,r="Ease Academy")=>{let a=`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #333;
    line-height: 1.6;
  `,d=`
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
  `,s=`
    padding: 26px;
    background: #f9f9f9;
  `,o=`
    background: white;
    padding: 18px;
    border-radius: 4px;
    margin: 16px 0;
    border-left: 4px solid #2b7a78;
  `,n=`
    background: #f0f0f0;
    padding: 18px;
    text-align: center;
    font-size: 12px;
    color: #666;
    border-top: 1px solid #ddd;
  `,l=`
    <div style="${o}">
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
          .header { ${d} }
          .content { ${s} }
          .details { ${o} }
          .footer { ${n} }
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

            <div style="${o}">
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
          .header { ${d} }
          .content { ${s} }
          .details { ${o} }
          .footer { ${n} }
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
          .header { ${d} }
          .content { ${s} }
          .details { ${o} }
          .footer { ${n} }
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
          .header { ${d} }
          .content { ${s} }
          .details { ${o} }
          .footer { ${n} }
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

            <div style="${o}">
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
    `:`<html><body><p>Hello ${t.firstName||t.fullName||""},</p><p>Your administrator record has been updated.</p></body></html>`}])}];

//# sourceMappingURL=%5Broot-of-the-server%5D__e298b371._.js.map