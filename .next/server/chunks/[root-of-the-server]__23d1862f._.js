module.exports=[918622,(e,t,r)=>{t.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},556704,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},832319,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},324725,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},224361,(e,t,r)=>{t.exports=e.x("util",()=>require("util"))},518041,e=>{"use strict";var t=e.i(926046);let r=new t.default.Schema({name:{type:String,required:[!0,"Branch name is required"],trim:!0},code:{type:String,required:[!0,"Branch code is required"],unique:!0,uppercase:!0,trim:!0},address:{street:String,city:String,state:String,zipCode:String,country:String},contact:{phone:String,email:String},location:{latitude:Number,longitude:Number,address:String},bankAccounts:[{accountTitle:String,serviceName:String,accountNo:String,iban:String,isDefault:{type:Boolean,default:!1}}],admin:{type:t.default.Schema.Types.ObjectId,ref:"User",default:null},status:{type:String,enum:["active","inactive"],default:"active"},settings:{type:Map,of:t.default.Schema.Types.Mixed,default:{}}},{timestamps:!0}),s=t.default.models.Branch||t.default.model("Branch",r);e.s(["default",0,s])},270406,(e,t,r)=>{t.exports=e.x("next/dist/compiled/@opentelemetry/api",()=>require("next/dist/compiled/@opentelemetry/api"))},193695,(e,t,r)=>{t.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},926046,(e,t,r)=>{t.exports=e.x("mongoose",()=>require("mongoose"))},300794,(e,t,r)=>{t.exports=e.x("node:dns/promises",()=>require("node:dns/promises"))},87170,e=>{"use strict";var t=e.i(300794),r=e.i(926046);t.default.setServers(["8.8.8.8","8.8.4.4"]);let s=process.env.MONGODB_URI,i="true"!==process.env.ENABLE_REAL_DB||!s,a=e.g.mongoose;async function o(){if(i)return null;if(a.conn)return a.conn;a.promise||(a.promise=r.default.connect(s,{bufferCommands:!1}).then(e=>(console.log("✅ MongoDB connected successfully"),e)));try{a.conn=await a.promise}catch(e){throw a.promise=null,e}return a.conn}function n(){return i}a||(a=e.g.mongoose={conn:null,promise:null}),e.s(["default",0,o,"isMockMode",()=>n])},254799,(e,t,r)=>{t.exports=e.x("crypto",()=>require("crypto"))},688947,(e,t,r)=>{t.exports=e.x("stream",()=>require("stream"))},500874,(e,t,r)=>{t.exports=e.x("buffer",()=>require("buffer"))},446786,(e,t,r)=>{t.exports=e.x("os",()=>require("os"))},427699,(e,t,r)=>{t.exports=e.x("events",()=>require("events"))},814747,(e,t,r)=>{t.exports=e.x("path",()=>require("path"))},522734,(e,t,r)=>{t.exports=e.x("fs",()=>require("fs"))},792509,(e,t,r)=>{t.exports=e.x("url",()=>require("url"))},921517,(e,t,r)=>{t.exports=e.x("http",()=>require("http"))},524836,(e,t,r)=>{t.exports=e.x("https",()=>require("https"))},406461,(e,t,r)=>{t.exports=e.x("zlib",()=>require("zlib"))},504446,(e,t,r)=>{t.exports=e.x("net",()=>require("net"))},391599,e=>{"use strict";e.s(["getAdminEmailTemplate",0,(e,t,r="Ease Academy")=>{let s=`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #333;
    line-height: 1.6;
  `,i=`
    background: linear-gradient(135deg, #2b7a78 0%, #1f8a70 100%);
    color: white;
    padding: 28px;
    text-align: center;
    border-radius: 8px 8px 0 0;
  `,a=`
    max-width: 600px;
    margin: 0 auto;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  `,o=`
    padding: 26px;
    background: #f9f9f9;
  `,n=`
    background: white;
    padding: 18px;
    border-radius: 4px;
    margin: 16px 0;
    border-left: 4px solid #2b7a78;
  `,d=`
    background: #f0f0f0;
    padding: 18px;
    text-align: center;
    font-size: 12px;
    color: #666;
    border-top: 1px solid #ddd;
  `,l=`
    <div style="${n}">
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
          body { ${s} }
          .container { ${a} }
          .header { ${i} }
          .content { ${o} }
          .details { ${n} }
          .footer { ${d} }
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

            <div style="${n}">
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
          body { ${s} }
          .container { ${a} }
          .header { ${i} }
          .content { ${o} }
          .details { ${n} }
          .footer { ${d} }
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
          body { ${s} }
          .container { ${a} }
          .header { ${i} }
          .content { ${o} }
          .details { ${n} }
          .footer { ${d} }
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
          body { ${s} }
          .container { ${a} }
          .header { ${i} }
          .content { ${o} }
          .details { ${n} }
          .footer { ${d} }
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

            <div style="${n}">
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
    `:`<html><body><p>Hello ${t.firstName||t.fullName||""},</p><p>Your administrator record has been updated.</p></body></html>`}])},865622,e=>{e.v(e=>Promise.resolve().then(()=>e(356780)))},365099,e=>{e.v(e=>Promise.resolve().then(()=>e(518041)))},495510,e=>{e.v(t=>Promise.all(["server/chunks/[root-of-the-server]__e4e0f6d3._.js","server/chunks/node_modules_7cac5bcb._.js"].map(t=>e.l(t))).then(()=>t(285465)))}];

//# sourceMappingURL=%5Broot-of-the-server%5D__23d1862f._.js.map