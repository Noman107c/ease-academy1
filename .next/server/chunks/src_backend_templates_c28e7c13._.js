module.exports=[725677,t=>{"use strict";t.s(["getStudentEmailTemplate",0,(t,e,d="Ease Academy")=>{let a=`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #333;
    line-height: 1.6;
  `,o=`
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
  `,r=`
    padding: 30px;
    background: #f9f9f9;
  `,n=`
    background: white;
    padding: 20px;
    border-radius: 4px;
    margin: 20px 0;
    border-left: 4px solid #667eea;
  `,s=`
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
          <td style="padding: 8px 0;">${e.firstName} ${e.lastName}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold;">Registration No:</td>
          <td style="padding: 8px 0;">${e.studentProfile?.registrationNumber||"N/A"}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold;">Roll Number:</td>
          <td style="padding: 8px 0;">${e.studentProfile?.rollNumber||"N/A"}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold;">Email:</td>
          <td style="padding: 8px 0;">${e.email||"N/A"}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
          <td style="padding: 8px 0;">${e.phone||"N/A"}</td>
        </tr>
      </table>
    </div>
  `;if("STUDENT_CREATED"===t)return`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { ${a} }
          .container { ${i} }
          .header { ${o} }
          .content { ${r} }
          .details { ${n} }
          .footer { ${s} }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 style="margin: 0; font-size: 28px;">🎓 ${d}</h2>
            <p style="margin: 10px 0 0 0; font-size: 14px;">Student Enrollment Confirmation</p>
          </div>
          
          <div class="content">
            <p style="margin-top: 0; font-size: 16px; font-weight: 500;">Dear Parent/Guardian,</p>
            
            <p>We are delighted to inform you that <strong>${e.firstName} ${e.lastName}</strong> has been successfully enrolled in ${d}.</p>
            
            ${l}
            
            <div style="${n}">
              <h4 style="margin-top: 0; color: #667eea;">Academic Details</h4>
              <table style="width: 100%; font-size: 14px;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; width: 40%;">Class:</td>
                  <td style="padding: 8px 0;">${e.studentProfile?.classId?.name||"N/A"}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Section:</td>
                  <td style="padding: 8px 0;">${e.studentProfile?.section||"N/A"}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Admission Date:</td>
                  <td style="padding: 8px 0;">${new Date(e.studentProfile?.admissionDate||new Date).toLocaleDateString()}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Academic Year:</td>
                  <td style="padding: 8px 0;">${e.studentProfile?.academicYear||"N/A"}</td>
                </tr>
              </table>
            </div>
            
            <p style="margin: 20px 0; color: #666; font-size: 14px;">Please keep this enrollment confirmation for your records. If you have any questions or concerns, please don't hesitate to contact us.</p>
            
            <p style="margin: 20px 0 0 0;">Best regards,<br><strong>${d} Administration</strong></p>
          </div>
          
          <div class="footer">
            <p style="margin: 0;">This is an automated email. Please do not reply to this message.</p>
            <p style="margin: 5px 0 0 0;">&copy; ${new Date().getFullYear()} ${d}. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;if("STUDENT_UPDATED"===t)return`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { ${a} }
          .container { ${i} }
          .header { ${o} }
          .content { ${r} }
          .details { ${n} }
          .footer { ${s} }
          .alert { background: #ffeaa7; padding: 15px; border-radius: 4px; margin: 15px 0; border-left: 4px solid #fdcb6e; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 style="margin: 0; font-size: 28px;">📝 ${d}</h2>
            <p style="margin: 10px 0 0 0; font-size: 14px;">Student Record Updated</p>
          </div>
          
          <div class="content">
            <p style="margin-top: 0; font-size: 16px; font-weight: 500;">Dear Parent/Guardian,</p>
            
            <p>This is to notify you that the enrollment record of <strong>${e.firstName} ${e.lastName}</strong> has been updated.</p>
            
            <div class="alert">
              <strong>⚠️ Important:</strong> Please review the updated information below to ensure all details are correct.
            </div>
            
            ${l}
            
            <div style="${n}">
              <h4 style="margin-top: 0; color: #667eea;">Updated Academic Details</h4>
              <table style="width: 100%; font-size: 14px;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; width: 40%;">Class:</td>
                  <td style="padding: 8px 0;">${e.studentProfile?.classId?.name||"N/A"}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Section:</td>
                  <td style="padding: 8px 0;">${e.studentProfile?.section||"N/A"}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Status:</td>
                  <td style="padding: 8px 0;"><strong style="color: ${"active"===e.status?"#27ae60":"#e74c3c"};">${e.status?.toUpperCase()}</strong></td>
                </tr>
              </table>
            </div>
            
            <p style="margin: 20px 0; color: #666; font-size: 14px;">If you believe this update was made in error, please contact the school administration immediately.</p>
            
            <p style="margin: 20px 0 0 0;">Best regards,<br><strong>${d} Administration</strong></p>
          </div>
          
          <div class="footer">
            <p style="margin: 0;">This is an automated email. Please do not reply to this message.</p>
            <p style="margin: 5px 0 0 0;">&copy; ${new Date().getFullYear()} ${d}. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;if("STUDENT_DEACTIVATED"===t)return`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { ${a} }
          .container { ${i} }
          .header { ${o} }
          .content { ${r} }
          .details { ${n} }
          .footer { ${s} }
          .alert { background: #fab1a0; padding: 15px; border-radius: 4px; margin: 15px 0; border-left: 4px solid #d63031; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header" style="background: linear-gradient(135deg, #d63031 0%, #e17055 100%);">
            <h2 style="margin: 0; font-size: 28px;">⚠️ ${d}</h2>
            <p style="margin: 10px 0 0 0; font-size: 14px;">Student Account Deactivated</p>
          </div>
          
          <div class="content">
            <p style="margin-top: 0; font-size: 16px; font-weight: 500;">Dear Parent/Guardian,</p>
            
            <div class="alert">
              <strong>Important Notice:</strong> The enrollment record of <strong>${e.firstName} ${e.lastName}</strong> has been deactivated.
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
            
            <p style="margin: 20px 0 0 0;">Best regards,<br><strong>${d} Administration</strong></p>
          </div>
          
          <div class="footer">
            <p style="margin: 0;">This is an automated email. Please do not reply to this message.</p>
            <p style="margin: 5px 0 0 0;">&copy; ${new Date().getFullYear()} ${d}. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;if("fee_voucher_generated"===t){let{voucherNumber:t,amount:l,dueDate:p,month:g,year:c,category:h,discountAmount:y,lateFeeAmount:x,totalAmount:m}=e;return`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Fee Voucher Generated</title>
      </head>
      <body style="${a}">
        <div style="${i}">
          <div style="${o}">
            <h1 style="margin: 0; font-size: 28px;">💳 Fee Voucher Generated</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">${d}</p>
          </div>
          
          <div style="${r}">
            <p>Dear <strong>${e.studentName||e.name}</strong>,</p>
            
            <div style="${n}">
              <strong>Your fee voucher has been generated successfully!</strong>
            </div>
            
            <div style="${n}">
              <h4 style="margin-top: 0; color: #667eea;">Voucher Details</h4>
              <table style="width: 100%; font-size: 14px;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; width: 40%;">Voucher Number:</td>
                  <td style="padding: 8px 0;"><strong style="color: #667eea;">${t}</strong></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Fee Category:</td>
                  <td style="padding: 8px 0;">${h||"Monthly Fee"}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Month/Year:</td>
                  <td style="padding: 8px 0;">${g}/${c}</td>
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
                ${x>0?`
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #e74c3c;">Late Fee:</td>
                  <td style="padding: 8px 0; color: #e74c3c;">+ Rs. ${x?.toLocaleString()}</td>
                </tr>
                `:""}
                <tr style="border-top: 2px solid #667eea;">
                  <td style="padding: 12px 0; font-weight: bold; font-size: 16px;">Total Amount:</td>
                  <td style="padding: 12px 0; font-weight: bold; font-size: 16px; color: #667eea;">Rs. ${m?.toLocaleString()}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Due Date:</td>
                  <td style="padding: 8px 0; color: #e74c3c;"><strong>${new Date(p).toLocaleDateString()}</strong></td>
                </tr>
              </table>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="http://localhost:3000/api/super-admin/fee-vouchers/${e.voucherId||t}/download" 
                 style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                📄 Download Fee Voucher
              </a>
            </div>
            
            ${x>0?`
            <div style="background: #fff3cd; padding: 15px; border-radius: 4px; margin: 20px 0; border-left: 4px solid #ffc107;">
              <strong style="color: #856404;">⚠️ Late Fee Applied:</strong>
              <p style="margin: 5px 0 0 0; color: #856404;">A late fee of Rs. ${x?.toLocaleString()} has been added due to previous unpaid fees.</p>
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
            <p style="margin: 10px 0 0 0;">Best regards,<br><strong>${d} Accounts Department</strong></p>
          </div>
          
          <div style="${s}">
            <p style="margin: 0;">This is an automated email. Please do not reply to this message.</p>
            <p style="margin: 5px 0 0 0;">&copy; ${new Date().getFullYear()} ${d}. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `}if("exam_scheduled"===t){let{studentName:t,examTitle:d,examType:l,examDate:p,subjectNames:g,className:c,schoolName:h}=e;return`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { ${a} }
          .container { ${i} }
          .header { ${o} }
          .content { ${r} }
          .details { ${n} }
          .footer { ${s} }
          .exam-alert { background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 4px; margin: 15px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 style="margin: 0; font-size: 28px;">📚 ${h}</h2>
            <p style="margin: 10px 0 0 0; font-size: 14px;">Exam Schedule Notification</p>
          </div>

          <div class="content">
            <p style="margin-top: 0; font-size: 16px; font-weight: 500;">Dear ${t},</p>

            <div class="exam-alert">
              <strong>📅 New Exam Scheduled</strong>
            </div>

            <p>A new examination has been scheduled for your class. Please find the details below:</p>

            <div style="${n}">
              <h4 style="margin-top: 0; color: #667eea;">Exam Details</h4>
              <table style="width: 100%; font-size: 14px;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; width: 40%;">Exam Title:</td>
                  <td style="padding: 8px 0;">${d}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Exam Type:</td>
                  <td style="padding: 8px 0;">${l.replace("_"," ").toUpperCase()}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Class:</td>
                  <td style="padding: 8px 0;">${c}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Exam Date:</td>
                  <td style="padding: 8px 0;"><strong style="color: #e74c3c;">${p}</strong></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Subjects:</td>
                  <td style="padding: 8px 0;">${g}</td>
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

            <p style="margin: 20px 0 0 0;">Best regards,<br><strong>${h} Administration</strong></p>
          </div>

          <div class="footer">
            <p style="margin: 0;">This is an automated email. Please do not reply to this message.</p>
            <p style="margin: 5px 0 0 0;">&copy; ${new Date().getFullYear()} ${h}. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `}return"<html><body><p>Hello,</p><p>Student record updated.</p></body></html>"}])},751249,t=>{"use strict";t.s(["getParentEmailTemplate",0,(t,e,d="Ease Academy")=>{let a=`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #333;
    line-height: 1.6;
  `,o=`
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
  `,r=`
    padding: 26px;
    background: #f9f9f9;
  `,n=`
    background: white;
    padding: 18px;
    border-radius: 4px;
    margin: 16px 0;
    border-left: 4px solid #2b7a78;
  `,s=`
    background: #f0f0f0;
    padding: 18px;
    text-align: center;
    font-size: 12px;
    color: #666;
    border-top: 1px solid #ddd;
  `,l=`
    <div style="${n}">
      <h4 style="margin-top: 0; color: #2b7a78;">Parent Information</h4>
      <table style="width:100%; font-size:14px;">
        <tr>
          <td style="padding:6px 0; font-weight:bold; width:40%;">Name:</td>
          <td style="padding:6px 0;">${e.fullName||`${e.firstName||""} ${e.lastName||""}`.trim()}</td>
        </tr>
        <tr>
          <td style="padding:6px 0; font-weight:bold;">Email:</td>
          <td style="padding:6px 0;">${e.email||"N/A"}</td>
        </tr>
        <tr>
          <td style="padding:6px 0; font-weight:bold;">Phone:</td>
          <td style="padding:6px 0;">${e.phone||"N/A"}</td>
        </tr>
      </table>
    </div>
  `;if("PARENT_APPROVED"===t)return`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { ${a} }
          .container { ${i} }
          .header { ${o} }
          .content { ${r} }
          .details { ${n} }
          .footer { ${s} }
          .success { background:#e6fffa; color:#065f46; padding:10px 14px; border-radius:4px; margin:12px 0; border:1px solid #b7f5e6; font-weight:600; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 style="margin:0; font-size:26px;">🛡️ ${d}</h2>
            <p style="margin:8px 0 0 0; font-size:14px;">Account Approved</p>
          </div>
          <div class="content">
            <p style="margin-top:0; font-size:16px; font-weight:500;">Dear ${e.firstName||e.fullName||""},</p>
            <div class="success">✅ Your account has been approved successfully!</div>

            ${l}

            <p style="margin:18px 0 0 0; color:#666; font-size:14px;">You can now access your parent dashboard to view your children's academic progress, attendance, announcements, and more.</p>

            <div style="${n}">
              <h4 style="margin-top:0; color:#2b7a78;">Getting Started</h4>
              <ul style="margin:8px 0; padding-left:20px;">
                <li>Login to your account using your email and password</li>
                <li>View your children's profiles and academic records</li>
                <li>Check attendance and performance reports</li>
                <li>Receive important announcements and notifications</li>
                <li>Communicate with teachers and school administration</li>
              </ul>
            </div>

            <p style="margin:20px 0 0 0;">Welcome to the ${d} family!</p>
            <p style="margin:8px 0 0 0;">Best regards,<br><strong>${d} Administration</strong></p>
          </div>
          <div class="footer">
            <p style="margin:0;">This is an automated email. Please do not reply to this message.</p>
            <p style="margin:6px 0 0 0;">&copy; ${new Date().getFullYear()} ${d}. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;if("CHILD_FEE_VOUCHER"===t){let{childName:t,voucherNumber:l,amount:p,dueDate:g,month:c,year:h,category:y,discountAmount:x,lateFeeAmount:m,totalAmount:f,className:u}=e;return`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { ${a} }
          .container { ${i} }
          .header { ${o} }
          .content { ${r} }
          .details { ${n} }
          .footer { ${s} }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 style="margin:0; font-size:26px;">💳 Fee Voucher - ${d}</h2>
            <p style="margin:8px 0 0 0; font-size:14px;">Payment Due Notification</p>
          </div>
          <div class="content">
            <p style="margin-top:0; font-size:16px; font-weight:500;">Dear ${e.firstName||e.fullName||"Parent/Guardian"},</p>
            
            <div style="background:#e3f2fd; padding:12px 16px; border-radius:4px; margin:14px 0; border-left:4px solid #2196f3;">
              <strong style="color:#1565c0;">A fee voucher has been generated for your child.</strong>
            </div>

            <div class="details">
              <h4 style="margin-top:0; color:#2b7a78;">Student Details</h4>
              <table style="width:100%; font-size:14px;">
                <tr>
                  <td style="padding:6px 0; font-weight:bold; width:40%;">Student Name:</td>
                  <td style="padding:6px 0;"><strong>${t}</strong></td>
                </tr>
                ${u?`
                <tr>
                  <td style="padding:6px 0; font-weight:bold;">Class:</td>
                  <td style="padding:6px 0;">${u}</td>
                </tr>
                `:""}
              </table>
            </div>

            <div class="details">
              <h4 style="margin-top:0; color:#2b7a78;">Voucher Details</h4>
              <table style="width:100%; font-size:14px;">
                <tr>
                  <td style="padding:8px 0; font-weight:bold; width:40%;">Voucher Number:</td>
                  <td style="padding:8px 0;"><strong style="color:#2b7a78;">${l}</strong></td>
                </tr>
                <tr>
                  <td style="padding:8px 0; font-weight:bold;">Fee Category:</td>
                  <td style="padding:8px 0;">${y||"Monthly Fee"}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0; font-weight:bold;">Month/Year:</td>
                  <td style="padding:8px 0;">${c}/${h}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0; font-weight:bold;">Base Amount:</td>
                  <td style="padding:8px 0;">Rs. ${p?.toLocaleString()}</td>
                </tr>
                ${x>0?`
                <tr>
                  <td style="padding:8px 0; font-weight:bold; color:#27ae60;">Discount:</td>
                  <td style="padding:8px 0; color:#27ae60;">- Rs. ${x?.toLocaleString()}</td>
                </tr>
                `:""}
                ${m>0?`
                <tr>
                  <td style="padding:8px 0; font-weight:bold; color:#e74c3c;">Late Fee:</td>
                  <td style="padding:8px 0; color:#e74c3c;">+ Rs. ${m?.toLocaleString()}</td>
                </tr>
                `:""}
                <tr style="border-top:2px solid #2b7a78;">
                  <td style="padding:12px 0; font-weight:bold; font-size:16px;">Total Payable:</td>
                  <td style="padding:12px 0; font-weight:bold; font-size:16px; color:#2b7a78;">Rs. ${f?.toLocaleString()}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0; font-weight:bold;">Due Date:</td>
                  <td style="padding:8px 0; color:#e74c3c;"><strong>${new Date(g).toLocaleDateString()}</strong></td>
                </tr>
              </table>
            </div>

            <div style="text-align:center; margin:20px 0;">
              <a href="http://localhost:3000/api/super-admin/fee-vouchers/${voucherId}/download" 
                 style="display:inline-block; background:#2b7a78; color:#ffffff; padding:12px 24px; text-decoration:none; border-radius:6px; font-weight:bold; font-size:16px; box-shadow:0 2px 4px rgba(0,0,0,0.1);">
                📄 Download Voucher
              </a>
            </div>

            ${m>0?`
            <div style="background:#fff3cd; padding:14px; border-radius:4px; margin:16px 0; border-left:4px solid #ffc107;">
              <strong style="color:#856404;">⚠️ Late Fee Applied:</strong>
              <p style="margin:6px 0 0 0; color:#856404;">A late fee of Rs. ${m?.toLocaleString()} has been added due to previous unpaid fees. Please clear dues promptly to avoid additional charges.</p>
            </div>
            `:""}

            <div style="background:#d1ecf1; padding:14px; border-radius:4px; margin:16px 0; border-left:4px solid#17a2b8;">
              <strong style="color:#0c5460;">💡 Payment Instructions:</strong>
              <ul style="margin:10px 0; padding-left:20px; color:#0c5460;">
                <li>Please pay before the due date to avoid late fees</li>
                <li>Quote voucher number <strong>${l}</strong> when making payment</li>
                <li>Payment can be made at school office or online portal</li>
                <li>Keep the payment receipt for your records</li>
              </ul>
            </div>

            <p style="margin:18px 0 0 0; color:#666; font-size:14px;">For any queries regarding this fee voucher, please contact the school accounts department.</p>
            <p style="margin:12px 0 0 0;">Thank you for your cooperation.</p>
            <p style="margin:8px 0 0 0;">Best regards,<br><strong>${d} Accounts Department</strong></p>
          </div>
          <div class="footer">
            <p style="margin:0;">This is an automated email. Please do not reply to this message.</p>
            <p style="margin:6px 0 0 0;">&copy; ${new Date().getFullYear()} ${d}. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `}if("CHILD_EXAM_SCHEDULED"===t){let{firstName:t,childName:d,examTitle:l,examType:p,examDate:g,subjectNames:c,className:h,schoolName:y}=e;return`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { ${a} }
          .container { ${i} }
          .header { ${o} }
          .content { ${r} }
          .details { ${n} }
          .footer { ${s} }
          .exam-alert { background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 4px; margin: 15px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 style="margin: 0; font-size: 26px;">📚 ${y}</h2>
            <p style="margin: 8px 0 0 0; font-size: 14px;">Exam Schedule Notification</p>
          </div>

          <div class="content">
            <p style="margin-top: 0; font-size: 16px; font-weight: 500;">Dear ${t},</p>

            <div class="exam-alert">
              <strong>📅 Exam Scheduled for ${d}</strong>
            </div>

            <p>A new examination has been scheduled for your child <strong>${d}</strong>. Please find the details below:</p>

            <div style="${n}">
              <h4 style="margin-top: 0; color: #2b7a78;">Exam Details</h4>
              <table style="width: 100%; font-size: 14px;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; width: 40%;">Student Name:</td>
                  <td style="padding: 8px 0;">${d}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Class:</td>
                  <td style="padding: 8px 0;">${h}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Exam Title:</td>
                  <td style="padding: 8px 0;">${l}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Exam Type:</td>
                  <td style="padding: 8px 0;">${p.replace("_"," ").toUpperCase()}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Exam Date:</td>
                  <td style="padding: 8px 0;"><strong style="color: #e74c3c;">${g}</strong></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Subjects:</td>
                  <td style="padding: 8px 0;">${c}</td>
                </tr>
              </table>
            </div>

            <div style="${n}">
              <h4 style="margin-top: 0; color: #2b7a78;">Parent Guidelines</h4>
              <ul style="margin: 8px 0; padding-left: 20px;">
                <li>Ensure your child arrives at school on time for the examination</li>
                <li>Help your child prepare necessary stationery and admit card</li>
                <li>Monitor your child's preparation and provide necessary support</li>
                <li>Contact the class teacher if your child needs special assistance</li>
                <li>Check school communications regularly for any updates</li>
              </ul>
            </div>

            <p style="margin: 20px 0; color: #666; font-size: 14px;">We wish ${d} the very best for the upcoming examination. Your support and encouragement play a crucial role in your child's success.</p>

            <p style="margin: 20px 0 0 0;">Best regards,<br><strong>${y} Administration</strong></p>
          </div>

          <div class="footer">
            <p style="margin: 0;">This is an automated email. Please do not reply to this message.</p>
            <p style="margin: 6px 0 0 0;">&copy; ${new Date().getFullYear()} ${y}. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `}return`<html><body><p>Hello ${e.firstName||e.fullName||""},</p><p>Your parent account has been updated.</p></body></html>`}])}];

//# sourceMappingURL=src_backend_templates_c28e7c13._.js.map