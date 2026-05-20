module.exports=[178126,a=>{"use strict";var b=a.i(187924),c=a.i(572131),d=a.i(50944),e=a.i(880203),f=a.i(400210),g=a.i(941675),h=a.i(284505),i=a.i(104720),j=a.i(961688),k=a.i(771931),l=a.i(546842),m=a.i(992258),n=a.i(963519),o=a.i(124987),p=a.i(641710),q=a.i(790166),r=a.i(93518),s=a.i(816201),t=a.i(862722),u=a.i(292e3),v=a.i(941961),w=a.i(463910),x=a.i(911156),y=a.i(170106);let z=(0,y.default)("file-pen-line",[["path",{d:"m18.226 5.226-2.52-2.52A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.351",key:"1k2beg"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"2t3380"}],["path",{d:"M8 18h1",key:"13wk12"}]]);var A=a.i(603314),B=a.i(724669),C=a.i(839761),D=a.i(87466),E=a.i(623237);let F=(0,y.default)("scan",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);var G=a.i(244494),H=a.i(177156),I=a.i(321161),J=a.i(749881),K=a.i(221078),L=a.i(528535),M=a.i(390645);function N({className:a="",orientation:c="horizontal",...d}){return(0,b.jsx)("div",{className:`
        ${"horizontal"===c?"h-px w-full bg-gray-200 dark:bg-gray-700":"h-full w-px bg-gray-200 dark:bg-gray-700"}
        ${a}
      `,...d})}function O({value:a=0,max:c=100,className:d="",...e}){let f=Math.min(Math.max(a/c*100,0),100);return(0,b.jsx)("div",{className:`
        relative h-2 w-full overflow-hidden rounded-full 
        bg-gray-200 dark:bg-gray-700
        ${d}
      `,...e,children:(0,b.jsx)("div",{className:"h-full bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 transition-all duration-300 ease-out",style:{width:`${f}%`},role:"progressbar","aria-valuenow":a,"aria-valuemin":0,"aria-valuemax":c})})}function P({className:a="",children:c,...d}){return(0,b.jsx)("div",{className:`relative flex items-center justify-center overflow-hidden bg-gray-200 dark:bg-gray-700 ${a}`,...d,children:c})}function Q({children:a,className:c=""}){return(0,b.jsx)("div",{className:`flex items-center justify-center h-full w-full font-semibold ${c}`,children:a})}var R=a.i(169100),S=a.i(725004),T=a.i(814180),U=a.i(860577),V=a.i(75013),W=a.i(21637),X=a.i(132262),Y=a.i(951634),Z=a.i(823292),$=a.i(256711);let _=["January","February","March","April","May","June","July","August","September","October","November","December"],aa=[{id:"appointment",label:"Appointment Letter",icon:z,color:"bg-blue-500"},{id:"duty-allocation",label:"Duty Allocation",icon:v.Briefcase,color:"bg-green-500"},{id:"salary-slip",label:"Salary Slip",icon:x.CreditCard,color:"bg-amber-500"},{id:"leave-approval",label:"Leave Approval",icon:g.Calendar,color:"bg-purple-500"},{id:"warning",label:"Warning Letter",icon:u.AlertCircle,color:"bg-red-500"},{id:"increment",label:"Increment Letter",icon:B.TrendingUp,color:"bg-emerald-500"},{id:"experience",label:"Experience Certificate",icon:r.Award,color:"bg-indigo-500"},{id:"relieving",label:"Relieving Letter",icon:D.FileCheck,color:"bg-orange-500"},{id:"termination",label:"Termination Letter",icon:t.XCircle,color:"bg-rose-500"}];function ab(){let a,{user:r}=(0,e.useAuth)(),y=(0,d.useRouter)(),B=(0,d.useParams)(),[D,ab]=(0,c.useState)(null),ac=D?.id,[ad,ae]=(0,c.useState)(!0),[af,ag]=(0,c.useState)(!1),[ah,ai]=(0,c.useState)("overview"),[aj,ak]=(0,c.useState)(null),[al,am]=(0,c.useState)([]),[an,ao]=(0,c.useState)(null),[ap,aq]=(0,c.useState)(null),ar=new Date,[as,at]=(0,c.useState)(ar.getMonth()+1),[au,av]=(0,c.useState)(ar.getFullYear()),[aw,ax]=(0,c.useState)([]),[ay,az]=(0,c.useState)(!1),[aA,aB]=(0,c.useState)(""),[aC,aD]=(0,c.useState)(!1),[aE,aF]=(0,c.useState)(!1),[aG,aH]=(0,c.useState)("front");(0,c.useRef)(null),(0,c.useEffect)(()=>{(async()=>{B&&ab(await B)})()},[B]),(0,c.useEffect)(()=>{r&&ac&&aI()},[r,ac]),(0,c.useEffect)(()=>{aj&&as&&au&&aK()},[aj,as,au]);let aI=async()=>{try{ae(!0);let a=await V.default.get(W.API_ENDPOINTS.SUPER_ADMIN.STAFF.GET.replace(":id",ac));a.success&&a.data?(ak(a.data),aJ(a.data)):(Z.toast.error("Staff member not found"),y.back())}catch(a){console.error("Error fetching staff:",a),Z.toast.error("Failed to load staff data"),y.back()}finally{ae(!1)}},aJ=a=>{let b=new Date(a.staffProfile?.joiningDate||a.createdAt),c=new Date,d=[],e=new Date(b.getFullYear(),b.getMonth(),1),f=new Date(c.getFullYear(),c.getMonth(),1);for(;e<=f;)d.push({month:e.getMonth()+1,year:e.getFullYear(),label:`${_[e.getMonth()]} ${e.getFullYear()}`}),e.setMonth(e.getMonth()+1);ax(d.reverse())},aK=async()=>{try{let a=await V.default.get(W.API_ENDPOINTS.SUPER_ADMIN.EMPLOYEE_ATTENDANCE.LIST,{userId:ac,month:as,year:au,limit:100});a.success&&am(a.data);let b=await V.default.get(W.API_ENDPOINTS.SUPER_ADMIN.EMPLOYEE_ATTENDANCE.SUMMARY,{userId:ac,month:as,year:au});b.success&&aq(b.data);let c=await V.default.get(W.API_ENDPOINTS.SUPER_ADMIN.PAYROLL.LIST,{userId:ac,month:as,year:au});c.success&&c.data?.length>0?ao(c.data[0]):ao(null)}catch(a){console.error("Error fetching monthly data:",a)}},aL=async()=>{try{ag(!0),(await V.default.post(W.API_ENDPOINTS.SUPER_ADMIN.PAYROLL.PROCESS,{userId:ac,month:as,year:au})).success&&(Z.toast.success("Payroll generated successfully"),aK())}catch(a){console.error("Error generating payroll:",a),Z.toast.error(a.message||"Failed to generate payroll")}finally{ag(!1)}},aM=(a="report")=>{let b=document.getElementById("print-content");if(!b)return;let c=window.open("","_blank");"idcard"===a?c.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>ID Card - ${aj?.firstName} ${aj?.lastName}</title>
            <style>
              @page {
                size: 85.6mm 54mm;
                margin: 0;
              }
              body {
                margin: 0;
                padding: 0;
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
              }
              .id-card-container {
                width: 85.6mm;
                height: 54mm;
                position: relative;
                overflow: hidden;
                font-family: Arial, sans-serif;
              }
              .id-card {
                width: 85.6mm;
                height: 54mm;
                position: relative;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                border-radius: 8px;
                overflow: hidden;
              }
              .id-card-front {
                width: 100%;
                height: 100%;
                padding: 3mm;
                box-sizing: border-box;
                position: relative;
                color: white;
              }
              .id-header {
                display: flex;
                align-items: center;
                margin-bottom: 2mm;
              }
              .id-logo {
                width: 12mm;
                height: 12mm;
                background: white;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 3mm;
                font-weight: bold;
                color: #667eea;
                font-size: 5mm;
              }
              .id-title {
                flex: 1;
              }
              .id-title h1 {
                margin: 0;
                font-size: 5mm;
                font-weight: bold;
              }
              .id-title p {
                margin: 0;
                font-size: 2.5mm;
                opacity: 0.9;
              }
              .id-content {
                display: flex;
                height: calc(100% - 20mm);
              }
              .id-left {
                flex: 2;
                padding-right: 3mm;
              }
              .id-right {
                flex: 1;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                border-left: 1px solid rgba(255,255,255,0.2);
                padding-left: 3mm;
              }
              .id-photo {
                width: 25mm;
                height: 30mm;
                background: rgba(255,255,255,0.1);
                border-radius: 4mm;
                margin-bottom: 3mm;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 12mm;
                color: white;
              }
              .employee-name {
                font-size: 5.5mm;
                font-weight: bold;
                margin: 0 0 2mm 0;
                line-height: 1.2;
              }
              .employee-role {
                background: rgba(255,255,255,0.2);
                padding: 1mm 3mm;
                border-radius: 2mm;
                font-size: 3mm;
                display: inline-block;
                margin-bottom: 3mm;
              }
              .id-details {
                font-size: 3mm;
                line-height: 1.6;
              }
              .detail-row {
                display: flex;
                margin-bottom: 1mm;
              }
              .detail-label {
                width: 20mm;
                opacity: 0.8;
              }
              .detail-value {
                font-weight: bold;
                flex: 1;
              }
              .qr-code {
                width: 18mm;
                height: 18mm;
                background: white;
                padding: 1mm;
                border-radius: 2mm;
                margin-bottom: 2mm;
              }
              .employee-id {
                font-size: 3.5mm;
                font-weight: bold;
                text-align: center;
                background: rgba(255,255,255,0.1);
                padding: 1mm;
                border-radius: 1mm;
                letter-spacing: 1px;
              }
              .id-footer {
                position: absolute;
                bottom: 3mm;
                left: 3mm;
                right: 3mm;
                font-size: 2mm;
                opacity: 0.7;
                text-align: center;
                padding-top: 2mm;
                border-top: 1px solid rgba(255,255,255,0.2);
              }
              .barcode {
                font-family: 'Libre Barcode 128', cursive;
                font-size: 8mm;
                letter-spacing: 2px;
              }
            </style>
          </head>
          <body>
            ${b.innerHTML}
          </body>
        </html>
      `):"report"===a&&c.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>${aj?.firstName} ${aj?.lastName} - Monthly Report</title>
            <style>
              @page { 
                size: A4; 
                margin: 15mm;
                @bottom-center {
                  content: "Page " counter(page) " of " counter(pages);
                  font-size: 10pt;
                  color: #666;
                }
              }
              body { 
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
                color: #333;
                line-height: 1.6;
              }
              .print-header {
                text-align: center;
                margin-bottom: 20px;
                padding-bottom: 15px;
                border-bottom: 3px solid #3b82f6;
              }
              .print-header h1 {
                color: #1e40af;
                margin: 0 0 5px 0;
                font-size: 24pt;
              }
              .print-header .subtitle {
                color: #6b7280;
                font-size: 11pt;
                margin: 0;
              }
              .print-meta {
                display: flex;
                justify-content: space-between;
                margin: 20px 0;
                font-size: 10pt;
                color: #6b7280;
              }
              .employee-photo {
                text-align: center;
                margin: 20px 0;
              }
              .photo-placeholder {
                width: 120px;
                height: 160px;
                background: #f3f4f6;
                border: 2px solid #d1d5db;
                border-radius: 8px;
                margin: 0 auto 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 48px;
                color: #9ca3af;
              }
              .section {
                margin: 25px 0;
                page-break-inside: avoid;
              }
              .section h2 {
                color: #1e40af;
                font-size: 16pt;
                border-bottom: 2px solid #e5e7eb;
                padding-bottom: 8px;
                margin-bottom: 15px;
              }
              .grid-2-col {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 15px;
                margin: 15px 0;
              }
              .info-item {
                margin-bottom: 10px;
              }
              .info-label {
                font-weight: 600;
                color: #4b5563;
                margin-bottom: 3px;
                font-size: 10pt;
              }
              .info-value {
                color: #1f2937;
                font-size: 11pt;
              }
              .table {
                width: 100%;
                border-collapse: collapse;
                margin: 15px 0;
                font-size: 10pt;
              }
              .table th {
                background-color: #f3f4f6;
                padding: 10px;
                text-align: left;
                border: 1px solid #d1d5db;
                font-weight: 600;
                color: #374151;
              }
              .table td {
                padding: 10px;
                border: 1px solid #e5e7eb;
                vertical-align: middle;
              }
              .status-badge {
                display: inline-block;
                padding: 4px 12px;
                border-radius: 20px;
                font-size: 9pt;
                font-weight: 500;
              }
              .status-present { background: #dcfce7; color: #166534; }
              .status-absent { background: #fee2e2; color: #991b1b; }
              .status-leave { background: #f3e8ff; color: #7c3aed; }
              .summary-cards {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 15px;
                margin: 20px 0;
              }
              .summary-card {
                border: 1px solid #e5e7eb;
                border-radius: 8px;
                padding: 15px;
                text-align: center;
              }
              .summary-value {
                font-size: 20pt;
                font-weight: bold;
                margin: 10px 0;
              }
              .summary-label {
                color: #6b7280;
                font-size: 10pt;
              }
              .signature-area {
                margin-top: 60px;
                display: flex;
                justify-content: space-between;
                page-break-inside: avoid;
              }
              .signature-box {
                text-align: center;
                width: 200px;
              }
              .signature-line {
                border-top: 1px solid #000;
                width: 100%;
                margin: 40px 0 10px;
              }
              .footer-note {
                text-align: center;
                font-size: 9pt;
                color: #9ca3af;
                margin-top: 30px;
                border-top: 1px solid #e5e7eb;
                padding-top: 15px;
              }
              .print-date {
                text-align: right;
                font-size: 9pt;
                color: #6b7280;
                margin-top: 30px;
              }
              .page-break {
                page-break-before: always;
              }
              .watermark {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%) rotate(-45deg);
                opacity: 0.05;
                font-size: 80pt;
                color: #ccc;
                pointer-events: none;
                z-index: -1;
              }
            </style>
          </head>
          <body>
            <div class="watermark">CONFIDENTIAL</div>
            ${b.innerHTML}
            <div class="print-date">
              Printed on: ${(0,$.format)(new Date,"MMMM dd, yyyy hh:mm a")}
            </div>
          </body>
        </html>
      `),c.document.close(),setTimeout(()=>{c.focus(),c.print()},500)},aN=a=>{if(!aj)return null;let b=`${aj.firstName} ${aj.lastName}`,c=aj.staffProfile?.position||"Staff Member",d=aj.staffProfile?.departmentId?.name||"General",e=aj.branchId?.name||"Ease Academy",f=aj.staffProfile?.employeeId||"N/A",g=(0,$.format)(new Date,"MMMM dd, yyyy"),h="",i="";switch(a){case"appointment":h="APPOINTMENT LETTER",i=`
          <p>Dear ${b},</p>
          <p>We are pleased to appoint you as <strong>${c}</strong> in the ${d} Department at ${e}, effective from ${(0,$.format)(new Date(aj.staffProfile?.joiningDate||new Date),"MMMM dd, yyyy")}.</p>
          <p>Your Employee ID is: <strong>${f}</strong></p>
          <p>This appointment is subject to the rules and regulations of the institution. Your initial probation period will be three months, after which your performance will be reviewed for confirmation.</p>
          <p>We welcome you to our team and look forward to a productive association.</p>
        `;break;case"salary-slip":h=`SALARY SLIP - ${_[as-1]} ${au}`,i=`
          <div class="grid-2-col">
            <div>
              <div class="info-item">
                <div class="info-label">Employee Name</div>
                <div class="info-value">${b}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Employee ID</div>
                <div class="info-value">${f}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Designation</div>
                <div class="info-value">${c}</div>
              </div>
            </div>
            <div>
              <div class="info-item">
                <div class="info-label">Department</div>
                <div class="info-value">${d}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Month</div>
                <div class="info-value">${_[as-1]} ${au}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Payment Date</div>
                <div class="info-value">${g}</div>
              </div>
            </div>
          </div>
          
          <div class="section">
            <h2>Earnings</h2>
            <table class="table">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Amount (PKR)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Basic Salary</td>
                  <td>${an?.basicSalary?.toLocaleString()||"0"}</td>
                </tr>
                <tr>
                  <td>House Rent Allowance</td>
                  <td>${(an?.allowances?.houseRent||0).toLocaleString()}</td>
                </tr>
                <tr>
                  <td>Medical Allowance</td>
                  <td>${(an?.allowances?.medical||0).toLocaleString()}</td>
                </tr>
                <tr>
                  <td><strong>Total Earnings</strong></td>
                  <td><strong>${(an?.grossSalary||0).toLocaleString()}</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div class="section">
            <h2>Deductions</h2>
            <table class="table">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Amount (PKR)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tax Deduction</td>
                  <td>${(an?.deductions?.tax||0).toLocaleString()}</td>
                </tr>
                <tr>
                  <td>Provident Fund</td>
                  <td>${(an?.deductions?.providentFund||0).toLocaleString()}</td>
                </tr>
                <tr>
                  <td><strong>Total Deductions</strong></td>
                  <td><strong>${(an?.totalDeductions||0).toLocaleString()}</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div class="section" style="background: #f0f9ff; padding: 20px; border-radius: 8px; border: 2px solid #1e40af;">
            <h2 style="color: #1e40af; margin-top: 0;">Net Payable Amount</h2>
            <div style="font-size: 24pt; font-weight: bold; color: #1e40af; text-align: center; margin: 20px 0;">
              PKR ${(an?.netSalary||0).toLocaleString()}
            </div>
            <div style="text-align: center; font-size: 12pt;">
              Payment Status: <strong>${an?.paymentStatus?.toUpperCase()||"PENDING"}</strong>
            </div>
          </div>
        `;break;default:h=aa.find(b=>b.id===a)?.label?.toUpperCase()||"OFFICIAL DOCUMENT",i=`
          <p>Dear ${b},</p>
          <p>This document serves as an official ${h} issued by ${e}.</p>
          <div class="section">
            <h2>Employee Details</h2>
            <div class="grid-2-col">
              <div class="info-item">
                <div class="info-label">Full Name</div>
                <div class="info-value">${b}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Employee ID</div>
                <div class="info-value">${f}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Designation</div>
                <div class="info-value">${c}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Department</div>
                <div class="info-value">${d}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Date of Issue</div>
                <div class="info-value">${g}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Branch</div>
                <div class="info-value">${e}</div>
              </div>
            </div>
          </div>
          <p>This document is digitally generated and authenticated by the ${e} Management System.</p>
        `}return{subject:h,content:i}};if(ad)return(0,b.jsx)(X.default,{message:"Loading staff details..."});if(!aj)return(0,b.jsx)("div",{className:"flex items-center justify-center min-h-screen",children:(0,b.jsx)(K.Card,{className:"w-full max-w-md",children:(0,b.jsxs)(K.CardContent,{className:"pt-6 text-center",children:[(0,b.jsx)(u.AlertCircle,{className:"h-12 w-12 text-red-500 mx-auto mb-4"}),(0,b.jsx)("h2",{className:"text-xl font-semibold mb-2",children:"Staff Member Not Found"}),(0,b.jsx)("p",{className:"text-gray-500 mb-4",children:"The requested staff member does not exist or you don't have permission to view."}),(0,b.jsx)(J.Button,{onClick:()=>y.back(),children:"Go Back"})]})})});let aO=al.filter(a=>"present"===a.status).length,aP=al.filter(a=>"absent"===a.status).length,aQ=al.filter(a=>"leave"===a.status).length,aR=(()=>{if(!ap||!al.length)return 0;let a=al.length;return Math.round(al.filter(a=>"present"===a.status).length/a*100)})();return(0,b.jsxs)("div",{className:"min-h-screen bg-gradient-to-b from-gray-50 to-gray-100",children:[(0,b.jsxs)("div",{className:"container mx-auto p-4 md:p-6",children:[(0,b.jsxs)("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6",children:[(0,b.jsxs)("div",{className:"flex items-center gap-3",children:[(0,b.jsx)(J.Button,{variant:"outline",size:"icon",onClick:()=>y.back(),className:"rounded-full hover:bg-gray-100",children:(0,b.jsx)(f.ArrowLeft,{className:"h-4 w-4"})}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h1",{className:"text-2xl md:text-3xl font-bold text-gray-900",children:"Staff Profile"}),(0,b.jsxs)("p",{className:"text-gray-500",children:["Complete details and management for ",aj.firstName," ",aj.lastName]})]})]}),(0,b.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,b.jsxs)(J.Button,{variant:"outline",onClick:()=>aD(!0),className:"gap-2 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200",children:[(0,b.jsx)(j.IdCard,{className:"h-4 w-4"}),"ID Card"]}),(0,b.jsxs)(J.Button,{onClick:()=>aF(!0),className:"gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white",children:[(0,b.jsx)(k.Printer,{className:"h-4 w-4"}),"Print Options"]})]})]}),(0,b.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[(0,b.jsxs)("div",{className:"lg:col-span-1 space-y-6",children:[(0,b.jsx)(K.Card,{className:"border border-gray-200 shadow-sm hover:shadow-md transition-shadow",children:(0,b.jsxs)(K.CardContent,{className:"p-6",children:[(0,b.jsxs)("div",{className:"flex flex-col items-center text-center mb-6",children:[(0,b.jsx)(P,{className:"h-32 w-32 border-4 border-white shadow-lg mb-4",children:(0,b.jsxs)(Q,{className:"bg-gradient-to-br from-blue-500 to-purple-600 text-3xl text-white",children:[aj.firstName?.charAt(0),aj.lastName?.charAt(0)]})}),(0,b.jsxs)("div",{children:[(0,b.jsxs)("h2",{className:"text-2xl font-bold",children:[aj.firstName," ",aj.lastName]}),(0,b.jsx)(L.Badge,{className:"mt-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0",children:aj.role.charAt(0).toUpperCase()+aj.role.slice(1)})]})]}),(0,b.jsxs)("div",{className:"grid grid-cols-2 gap-3 mb-6",children:[(0,b.jsxs)("div",{className:"bg-blue-50 rounded-lg p-3 text-center",children:[(0,b.jsx)("div",{className:"text-xs text-blue-600 mb-1",children:"Staff Since"}),(0,b.jsx)("div",{className:"font-bold text-blue-900",children:aj.staffProfile?.joiningDate?(0,$.format)(new Date(aj.staffProfile.joiningDate),"MMM yyyy"):"N/A"})]}),(0,b.jsxs)("div",{className:"bg-green-50 rounded-lg p-3 text-center",children:[(0,b.jsx)("div",{className:"text-xs text-green-600 mb-1",children:"Attendance"}),(0,b.jsxs)("div",{className:"font-bold text-green-900",children:[aR,"%"]})]})]}),(0,b.jsxs)("div",{className:"space-y-3",children:[(0,b.jsxs)("div",{className:"flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors",children:[(0,b.jsx)("div",{className:"h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center",children:(0,b.jsx)(j.IdCard,{className:"h-5 w-5 text-blue-600"})}),(0,b.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,b.jsx)("p",{className:"text-xs text-gray-500 truncate",children:"Employee ID"}),(0,b.jsx)("p",{className:"font-semibold truncate",children:aj.staffProfile?.employeeId||"N/A"})]})]}),(0,b.jsxs)("div",{className:"flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors",children:[(0,b.jsx)("div",{className:"h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center",children:(0,b.jsx)(v.Briefcase,{className:"h-5 w-5 text-gray-600"})}),(0,b.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,b.jsx)("p",{className:"text-xs text-gray-500 truncate",children:"Designation"}),(0,b.jsx)("p",{className:"font-semibold truncate",children:aj.staffProfile?.position||"Staff"})]})]}),(0,b.jsxs)("div",{className:"flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors",children:[(0,b.jsx)("div",{className:"h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center",children:(0,b.jsx)(w.Building,{className:"h-5 w-5 text-gray-600"})}),(0,b.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,b.jsx)("p",{className:"text-xs text-gray-500 truncate",children:"Department"}),(0,b.jsx)("p",{className:"font-semibold truncate",children:aj.staffProfile?.departmentId?.name||"N/A"})]})]})]}),(0,b.jsx)(N,{className:"my-6"}),(0,b.jsxs)("h3",{className:"font-semibold mb-4 flex items-center gap-2",children:[(0,b.jsx)(l.User,{className:"h-4 w-4"}),"Contact Information"]}),(0,b.jsxs)("div",{className:"space-y-3",children:[(0,b.jsxs)("div",{className:"flex items-center gap-2 text-sm",children:[(0,b.jsx)(m.Mail,{className:"h-4 w-4 text-gray-400 flex-shrink-0"}),(0,b.jsx)("span",{className:"truncate",children:aj.email})]}),aj.phone&&(0,b.jsxs)("div",{className:"flex items-center gap-2 text-sm",children:[(0,b.jsx)(n.Phone,{className:"h-4 w-4 text-gray-400 flex-shrink-0"}),(0,b.jsx)("span",{className:"truncate",children:aj.phone})]}),aj.address?.city&&(0,b.jsxs)("div",{className:"flex items-center gap-2 text-sm",children:[(0,b.jsx)(o.MapPin,{className:"h-4 w-4 text-gray-400 flex-shrink-0"}),(0,b.jsxs)("span",{className:"truncate",children:[aj.address.city,", ",aj.address.country]})]})]})]})}),(0,b.jsxs)(K.Card,{className:"border border-gray-200 shadow-sm",children:[(0,b.jsx)(K.CardHeader,{className:"pb-3",children:(0,b.jsxs)(K.CardTitle,{className:"text-lg flex items-center gap-2",children:[(0,b.jsx)(I.Settings,{className:"h-5 w-5"}),"Quick Actions"]})}),(0,b.jsx)(K.CardContent,{className:"pt-0",children:(0,b.jsxs)("div",{className:"grid grid-cols-2 gap-2",children:[(0,b.jsxs)(J.Button,{variant:"outline",size:"sm",className:"justify-start gap-2 hover:bg-blue-50",onClick:()=>{aB("salary-slip"),az(!0)},children:[(0,b.jsx)(x.CreditCard,{className:"h-4 w-4"}),"Salary Slip"]}),(0,b.jsxs)(J.Button,{variant:"outline",size:"sm",className:"justify-start gap-2 hover:bg-green-50",onClick:()=>y.push(`/staff/${ac}/attendance`),children:[(0,b.jsx)(s.CheckCircle,{className:"h-4 w-4"}),"Attendance"]}),(0,b.jsxs)(J.Button,{variant:"outline",size:"sm",className:"justify-start gap-2 hover:bg-purple-50",onClick:()=>{aB("appointment"),az(!0)},children:[(0,b.jsx)(z,{className:"h-4 w-4"}),"Letters"]}),(0,b.jsxs)(J.Button,{variant:"outline",size:"sm",className:"justify-start gap-2 hover:bg-amber-50",onClick:()=>aM("report"),children:[(0,b.jsx)(k.Printer,{className:"h-4 w-4"}),"Print Report"]})]})})]})]}),(0,b.jsxs)("div",{className:"lg:col-span-2 space-y-6",children:[(0,b.jsxs)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[(0,b.jsx)(K.Card,{className:"border border-gray-200 shadow-sm hover:shadow-md transition-shadow",children:(0,b.jsxs)(K.CardContent,{className:"p-4",children:[(0,b.jsxs)("div",{className:"flex items-center justify-between",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("p",{className:"text-sm text-gray-500",children:"Present Days"}),(0,b.jsx)("p",{className:"text-2xl font-bold text-gray-900",children:aO})]}),(0,b.jsx)("div",{className:"h-10 w-10 rounded-full bg-green-100 flex items-center justify-center",children:(0,b.jsx)(s.CheckCircle,{className:"h-5 w-5 text-green-600"})})]}),(0,b.jsx)(O,{value:4*aO,className:"h-1.5 mt-3 bg-gray-100"})]})}),(0,b.jsx)(K.Card,{className:"border border-gray-200 shadow-sm hover:shadow-md transition-shadow",children:(0,b.jsxs)(K.CardContent,{className:"p-4",children:[(0,b.jsxs)("div",{className:"flex items-center justify-between",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("p",{className:"text-sm text-gray-500",children:"Absent Days"}),(0,b.jsx)("p",{className:"text-2xl font-bold text-gray-900",children:aP})]}),(0,b.jsx)("div",{className:"h-10 w-10 rounded-full bg-red-100 flex items-center justify-center",children:(0,b.jsx)(t.XCircle,{className:"h-5 w-5 text-red-600"})})]}),(0,b.jsx)(O,{value:4*aP,className:"h-1.5 mt-3 bg-gray-100"})]})}),(0,b.jsx)(K.Card,{className:"border border-gray-200 shadow-sm hover:shadow-md transition-shadow",children:(0,b.jsxs)(K.CardContent,{className:"p-4",children:[(0,b.jsxs)("div",{className:"flex items-center justify-between",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("p",{className:"text-sm text-gray-500",children:"Leaves"}),(0,b.jsx)("p",{className:"text-2xl font-bold text-gray-900",children:aQ})]}),(0,b.jsx)("div",{className:"h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center",children:(0,b.jsx)(g.Calendar,{className:"h-5 w-5 text-purple-600"})})]}),(0,b.jsx)(O,{value:4*aQ,className:"h-1.5 mt-3 bg-gray-100"})]})}),(0,b.jsx)(K.Card,{className:"border border-gray-200 shadow-sm hover:shadow-md transition-shadow",children:(0,b.jsxs)(K.CardContent,{className:"p-4",children:[(0,b.jsxs)("div",{className:"flex items-center justify-between",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("p",{className:"text-sm text-gray-500",children:"Attendance"}),(0,b.jsxs)("p",{className:"text-2xl font-bold text-gray-900",children:[aR,"%"]})]}),(0,b.jsx)("div",{className:"h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center",children:(0,b.jsx)(C.BarChart3,{className:"h-5 w-5 text-blue-600"})})]}),(0,b.jsx)(O,{value:aR,className:"h-1.5 mt-3 bg-gray-100"})]})})]}),(0,b.jsx)(K.Card,{className:"border border-gray-200 shadow-sm",children:(0,b.jsx)(K.CardContent,{className:"p-4",children:(0,b.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center gap-4",children:[(0,b.jsxs)("div",{className:"flex-1",children:[(0,b.jsx)(R.Label,{className:"mb-2 block text-sm font-medium",children:"Select Month & Year"}),(0,b.jsxs)("div",{className:"flex gap-2",children:[(0,b.jsx)(S.default,{value:`${as}-${au}`,onChange:a=>{let[b,c]=a.target.value.split("-");at(parseInt(b)),av(parseInt(c))},options:aw.map(a=>({value:`${a.month}-${a.year}`,label:a.label})),placeholder:"Select month",className:"flex-1"}),(0,b.jsx)(J.Button,{variant:"outline",size:"icon",onClick:()=>aM("report"),className:"flex-shrink-0",children:(0,b.jsx)(k.Printer,{className:"h-4 w-4"})})]})]}),(0,b.jsxs)("div",{className:"text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg",children:["Showing data for ",(0,b.jsxs)("span",{className:"font-semibold text-gray-900",children:[_[as-1]," ",au]})]})]})})}),(0,b.jsx)(M.default,{tabs:[{id:"overview",label:"Overview",icon:(0,b.jsx)(l.User,{className:"h-4 w-4"})},{id:"attendance",label:"Attendance",icon:(0,b.jsx)(s.CheckCircle,{className:"h-4 w-4"}),badge:al.length},{id:"payroll",label:"Payroll",icon:(0,b.jsx)(q.DollarSign,{className:"h-4 w-4"})},{id:"documents",label:"Documents",icon:(0,b.jsx)(i.FileText,{className:"h-4 w-4"})}],activeTab:ah,onChange:ai}),(0,b.jsx)(M.TabPanel,{value:"overview",activeTab:ah,children:(0,b.jsxs)(K.Card,{className:"border border-gray-200 shadow-sm",children:[(0,b.jsx)(K.CardHeader,{children:(0,b.jsx)(K.CardTitle,{children:"Employment Details"})}),(0,b.jsx)(K.CardContent,{children:(0,b.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[(0,b.jsxs)("div",{className:"space-y-4",children:[(0,b.jsxs)("h3",{className:"font-semibold flex items-center gap-2",children:[(0,b.jsx)(v.Briefcase,{className:"h-4 w-4"}),"Job Information"]}),(0,b.jsx)("div",{className:"space-y-3",children:[{label:"Designation",value:aj.staffProfile?.position||"N/A"},{label:"Department",value:aj.staffProfile?.departmentId?.name||"N/A"},{label:"Shift",value:(aj.staffProfile?.shift||"Morning").toUpperCase()},{label:"Employment Type",value:(aj.staffProfile?.employmentType||"Permanent").toUpperCase()},{label:"Joining Date",value:aj.staffProfile?.joiningDate?(0,$.format)(new Date(aj.staffProfile.joiningDate),"MMMM dd, yyyy"):"N/A"}].map((a,c)=>(0,b.jsxs)("div",{className:"flex justify-between items-center py-2 border-b border-gray-100 last:border-0",children:[(0,b.jsx)("span",{className:"text-gray-600 text-sm",children:a.label}),(0,b.jsx)("span",{className:"font-medium text-gray-900",children:a.value})]},c))})]}),(0,b.jsxs)("div",{className:"space-y-4",children:[(0,b.jsxs)("h3",{className:"font-semibold flex items-center gap-2",children:[(0,b.jsx)(A.Shield,{className:"h-4 w-4"}),"Personal Details"]}),(0,b.jsx)("div",{className:"space-y-3",children:[{label:"CNIC",value:aj.cnic||"N/A"},{label:"Phone",value:aj.phone||"N/A"},{label:"Emergency Contact",value:aj.staffProfile?.emergencyContact?.phone?`${aj.staffProfile.emergencyContact.name} (${aj.staffProfile.emergencyContact.phone})`:"N/A"},{label:"Blood Group",value:aj.bloodGroup||"N/A"},{label:"Nationality",value:aj.nationality||"Pakistani"}].map((a,c)=>(0,b.jsxs)("div",{className:"flex justify-between items-center py-2 border-b border-gray-100 last:border-0",children:[(0,b.jsx)("span",{className:"text-gray-600 text-sm",children:a.label}),(0,b.jsx)("span",{className:"font-medium text-gray-900 text-right",children:a.value})]},c))})]})]})})]})}),(0,b.jsx)(M.TabPanel,{value:"attendance",activeTab:ah,children:(0,b.jsxs)(K.Card,{className:"border border-gray-200 shadow-sm",children:[(0,b.jsx)(K.CardHeader,{children:(0,b.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)(K.CardTitle,{children:"Attendance Records"}),(0,b.jsxs)(K.CardDescription,{children:[al.length," records for ",_[as-1]," ",au]})]}),(0,b.jsxs)(J.Button,{variant:"outline",size:"sm",onClick:()=>aM("report"),className:"gap-2",children:[(0,b.jsx)(k.Printer,{className:"h-4 w-4"}),"Print Report"]})]})}),(0,b.jsx)(K.CardContent,{children:0===al.length?(0,b.jsxs)("div",{className:"text-center py-12 border-2 border-dashed border-gray-200 rounded-lg",children:[(0,b.jsx)(g.Calendar,{className:"h-12 w-12 mx-auto mb-4 text-gray-300"}),(0,b.jsx)("p",{className:"text-gray-500 mb-2",children:"No attendance records found for this month"})]}):(0,b.jsx)("div",{className:"overflow-x-auto rounded-lg border border-gray-200",children:(0,b.jsxs)("table",{className:"w-full",children:[(0,b.jsx)("thead",{className:"bg-gray-50",children:(0,b.jsxs)("tr",{children:[(0,b.jsx)("th",{className:"p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Date"}),(0,b.jsx)("th",{className:"p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Day"}),(0,b.jsx)("th",{className:"p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Status"}),(0,b.jsx)("th",{className:"p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Check In"}),(0,b.jsx)("th",{className:"p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Check Out"}),(0,b.jsx)("th",{className:"p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Hours"})]})}),(0,b.jsx)("tbody",{className:"divide-y divide-gray-200",children:al.map(a=>{var c;let d,e,f;return(0,b.jsxs)("tr",{className:"hover:bg-gray-50",children:[(0,b.jsx)("td",{className:"p-3 text-sm",children:(0,$.format)(new Date(a.date),"MMM dd, yyyy")}),(0,b.jsx)("td",{className:"p-3 text-sm",children:(0,$.format)(new Date(a.date),"EEE")}),(0,b.jsx)("td",{className:"p-3",children:(c=a.status,f=(e=(d={present:{color:"bg-green-100 text-green-800 border-green-200",icon:s.CheckCircle},absent:{color:"bg-red-100 text-red-800 border-red-200",icon:t.XCircle},late:{color:"bg-yellow-100 text-yellow-800 border-yellow-200",icon:p.Clock},"half-day":{color:"bg-blue-100 text-blue-800 border-blue-200",icon:p.Clock},leave:{color:"bg-purple-100 text-purple-800 border-purple-200",icon:g.Calendar}})[c]||d.present).icon,(0,b.jsxs)(L.Badge,{variant:"outline",className:`${e.color} gap-1.5`,children:[(0,b.jsx)(f,{className:"h-3.5 w-3.5"}),c.charAt(0).toUpperCase()+c.slice(1)]}))}),(0,b.jsx)("td",{className:"p-3 text-sm font-mono",children:a.checkIn?.time?(0,$.format)(new Date(a.checkIn.time),"hh:mm a"):"--:--"}),(0,b.jsx)("td",{className:"p-3 text-sm font-mono",children:a.checkOut?.time?(0,$.format)(new Date(a.checkOut.time),"hh:mm a"):"--:--"}),(0,b.jsx)("td",{className:"p-3 text-sm font-mono font-medium",children:a.workingHours?`${a.workingHours.toFixed(1)}h`:"-"})]},a._id)})})]})})})]})}),(0,b.jsx)(M.TabPanel,{value:"payroll",activeTab:ah,children:(0,b.jsxs)(K.Card,{className:"border border-gray-200 shadow-sm",children:[(0,b.jsx)(K.CardHeader,{children:(0,b.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)(K.CardTitle,{children:"Payroll Details"}),(0,b.jsxs)(K.CardDescription,{children:["Salary information for ",_[as-1]," ",au]})]}),an?(0,b.jsxs)(J.Button,{variant:"outline",size:"sm",onClick:()=>{aB("salary-slip"),az(!0)},className:"gap-2",children:[(0,b.jsx)(k.Printer,{className:"h-4 w-4"}),"Print Salary Slip"]}):(0,b.jsx)(J.Button,{onClick:aL,disabled:af,className:"gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700",children:af?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(Y.default,{}),"Processing..."]}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(q.DollarSign,{className:"h-4 w-4"}),"Generate Payroll"]})})]})}),(0,b.jsx)(K.CardContent,{children:an?(0,b.jsxs)("div",{className:"space-y-6",children:[(0,b.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[(0,b.jsx)(K.Card,{className:"border border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100",children:(0,b.jsxs)(K.CardContent,{className:"p-4",children:[(0,b.jsx)("p",{className:"text-sm font-medium text-blue-700 mb-1",children:"Basic Salary"}),(0,b.jsxs)("p",{className:"text-2xl font-bold text-blue-900",children:["Rs. ",an.basicSalary?.toLocaleString()]}),(0,b.jsx)("div",{className:"text-xs text-blue-600 mt-2",children:"Monthly Fixed"})]})}),(0,b.jsx)(K.Card,{className:"border border-red-200 bg-gradient-to-br from-red-50 to-red-100",children:(0,b.jsxs)(K.CardContent,{className:"p-4",children:[(0,b.jsx)("p",{className:"text-sm font-medium text-red-700 mb-1",children:"Deductions"}),(0,b.jsxs)("p",{className:"text-2xl font-bold text-red-900",children:["Rs. ",an.totalDeductions?.toLocaleString()]}),(0,b.jsx)("div",{className:"text-xs text-red-600 mt-2",children:"Tax + Provident Fund"})]})}),(0,b.jsx)(K.Card,{className:"border border-green-200 bg-gradient-to-br from-green-50 to-green-100",children:(0,b.jsxs)(K.CardContent,{className:"p-4",children:[(0,b.jsx)("p",{className:"text-sm font-medium text-green-700 mb-1",children:"Net Payable"}),(0,b.jsxs)("p",{className:"text-2xl font-bold text-green-900",children:["Rs. ",an.netSalary?.toLocaleString()]}),(0,b.jsx)("div",{className:"text-xs text-green-600 mt-2",children:"After all deductions"})]})})]}),(0,b.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[(0,b.jsxs)(K.Card,{className:"border border-gray-200",children:[(0,b.jsx)(K.CardHeader,{className:"pb-3",children:(0,b.jsx)(K.CardTitle,{className:"text-lg",children:"Earnings"})}),(0,b.jsx)(K.CardContent,{children:(0,b.jsxs)("div",{className:"space-y-4",children:[(0,b.jsxs)("div",{className:"flex justify-between items-center p-3 bg-gray-50 rounded-lg",children:[(0,b.jsx)("span",{className:"font-medium",children:"Basic Salary"}),(0,b.jsxs)("span",{className:"font-bold text-green-700",children:["Rs. ",an.basicSalary?.toLocaleString()]})]}),(0,b.jsxs)("div",{className:"space-y-2",children:[(0,b.jsxs)("div",{className:"flex justify-between",children:[(0,b.jsx)("span",{className:"text-gray-600",children:"House Rent Allowance"}),(0,b.jsxs)("span",{children:["Rs. ",(an.allowances?.houseRent||0).toLocaleString()]})]}),(0,b.jsxs)("div",{className:"flex justify-between",children:[(0,b.jsx)("span",{className:"text-gray-600",children:"Medical Allowance"}),(0,b.jsxs)("span",{children:["Rs. ",(an.allowances?.medical||0).toLocaleString()]})]}),(0,b.jsxs)("div",{className:"flex justify-between",children:[(0,b.jsx)("span",{className:"text-gray-600",children:"Transport Allowance"}),(0,b.jsxs)("span",{children:["Rs. ",(an.allowances?.transport||0).toLocaleString()]})]})]}),(0,b.jsx)(N,{}),(0,b.jsxs)("div",{className:"flex justify-between items-center p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200",children:[(0,b.jsx)("span",{className:"font-bold",children:"Total Earnings"}),(0,b.jsxs)("span",{className:"font-bold text-xl text-green-800",children:["Rs. ",(an.grossSalary||0).toLocaleString()]})]})]})})]}),(0,b.jsxs)(K.Card,{className:"border border-gray-200",children:[(0,b.jsx)(K.CardHeader,{className:"pb-3",children:(0,b.jsx)(K.CardTitle,{className:"text-lg",children:"Deductions"})}),(0,b.jsx)(K.CardContent,{children:(0,b.jsxs)("div",{className:"space-y-4",children:[(0,b.jsxs)("div",{className:"space-y-2",children:[(0,b.jsxs)("div",{className:"flex justify-between",children:[(0,b.jsx)("span",{className:"text-gray-600",children:"Tax Deduction"}),(0,b.jsxs)("span",{className:"text-red-600",children:["Rs. ",(an.deductions?.tax||0).toLocaleString()]})]}),(0,b.jsxs)("div",{className:"flex justify-between",children:[(0,b.jsx)("span",{className:"text-gray-600",children:"Provident Fund"}),(0,b.jsxs)("span",{className:"text-red-600",children:["Rs. ",(an.deductions?.providentFund||0).toLocaleString()]})]}),(0,b.jsxs)("div",{className:"flex justify-between",children:[(0,b.jsx)("span",{className:"text-gray-600",children:"Insurance"}),(0,b.jsxs)("span",{className:"text-red-600",children:["Rs. ",(an.deductions?.insurance||0).toLocaleString()]})]})]}),(0,b.jsx)(N,{}),(0,b.jsxs)("div",{className:"flex justify-between items-center p-3 bg-gradient-to-r from-red-50 to-rose-50 rounded-lg border border-red-200",children:[(0,b.jsx)("span",{className:"font-bold",children:"Total Deductions"}),(0,b.jsxs)("span",{className:"font-bold text-xl text-red-800",children:["Rs. ",(an.totalDeductions||0).toLocaleString()]})]})]})})]})]}),(0,b.jsx)(K.Card,{className:"border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50",children:(0,b.jsx)(K.CardContent,{className:"p-6",children:(0,b.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("p",{className:"text-sm text-green-700 font-medium",children:"Payment Status"}),(0,b.jsx)(L.Badge,{className:`mt-2 text-sm px-4 py-1.5 font-medium ${"paid"===an.paymentStatus?"bg-green-100 text-green-800 border-green-300 shadow-sm":"pending"===an.paymentStatus?"bg-yellow-100 text-yellow-800 border-yellow-300 shadow-sm":"bg-red-100 text-red-800 border-red-300 shadow-sm"}`,children:an.paymentStatus?.toUpperCase()})]}),(0,b.jsxs)("div",{className:"text-right",children:[(0,b.jsx)("p",{className:"text-sm text-gray-600",children:"Payment Date"}),(0,b.jsx)("p",{className:"font-bold text-lg",children:an.paymentDate?(0,$.format)(new Date(an.paymentDate),"MMM dd, yyyy"):"Not Paid Yet"})]}),(0,b.jsxs)("div",{className:"text-right",children:[(0,b.jsx)("p",{className:"text-sm text-gray-600",children:"Bank Account"}),(0,b.jsx)("p",{className:"font-medium",children:aj.staffProfile?.bankAccount?.accountNumber?`****${aj.staffProfile.bankAccount.accountNumber.slice(-4)}`:"Not Set"})]})]})})})]}):(0,b.jsxs)("div",{className:"text-center py-12 border-2 border-dashed border-gray-200 rounded-lg",children:[(0,b.jsx)(q.DollarSign,{className:"h-12 w-12 mx-auto mb-4 text-gray-300"}),(0,b.jsxs)("p",{className:"text-gray-500 mb-2",children:["No payroll record found for ",_[as-1]," ",au]}),(0,b.jsx)("p",{className:"text-sm text-gray-400 mb-4",children:"Generate payroll to view salary details"})]})})]})}),(0,b.jsx)(M.TabPanel,{value:"documents",activeTab:ah,children:(0,b.jsxs)(K.Card,{className:"border border-gray-200 shadow-sm",children:[(0,b.jsxs)(K.CardHeader,{children:[(0,b.jsx)(K.CardTitle,{children:"Official Documents"}),(0,b.jsx)(K.CardDescription,{children:"Generate and print official letters and certificates"})]}),(0,b.jsx)(K.CardContent,{children:(0,b.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:aa.map(a=>{let c=a.icon;return(0,b.jsx)(K.Card,{className:"cursor-pointer hover:shadow-lg transition-all duration-200 border border-gray-200 hover:border-blue-300 hover:-translate-y-1",onClick:()=>{aB(a.id),az(!0)},children:(0,b.jsxs)(K.CardContent,{className:"p-5 flex flex-col items-center text-center",children:[(0,b.jsx)("div",{className:`h-14 w-14 rounded-2xl ${a.color} flex items-center justify-center mb-4 shadow-md`,children:(0,b.jsx)(c,{className:"h-7 w-7 text-white"})}),(0,b.jsx)("h3",{className:"font-semibold mb-2 text-gray-900",children:a.label}),(0,b.jsx)("p",{className:"text-xs text-gray-500",children:"Click to generate and print"})]})},a.id)})})})]})})]})]})]}),(0,b.jsx)(T.default,{open:aE,onClose:()=>aF(!1),title:"Print Options",size:"lg",children:(0,b.jsxs)("div",{className:"space-y-6",children:[(0,b.jsx)("p",{className:"text-gray-600",children:"Select what you want to print:"}),(0,b.jsxs)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:[(0,b.jsxs)(J.Button,{variant:"outline",className:"h-auto py-5 flex-col gap-3 hover:bg-blue-50 hover:border-blue-300",onClick:()=>{aF(!1),aM("report")},children:[(0,b.jsx)(i.FileText,{className:"h-8 w-8 text-blue-600"}),(0,b.jsxs)("div",{children:[(0,b.jsx)("div",{className:"font-semibold",children:"Monthly Report"}),(0,b.jsx)("div",{className:"text-xs text-gray-500 mt-1",children:"Complete report"})]})]}),(0,b.jsxs)(J.Button,{variant:"outline",className:"h-auto py-5 flex-col gap-3 hover:bg-purple-50 hover:border-purple-300",onClick:()=>{aF(!1),aD(!0),aH("front")},children:[(0,b.jsx)(j.IdCard,{className:"h-8 w-8 text-purple-600"}),(0,b.jsxs)("div",{children:[(0,b.jsx)("div",{className:"font-semibold",children:"ID Card"}),(0,b.jsx)("div",{className:"text-xs text-gray-500 mt-1",children:"85.6mm × 54mm"})]})]}),(0,b.jsxs)(J.Button,{variant:"outline",className:"h-auto py-5 flex-col gap-3 hover:bg-green-50 hover:border-green-300",onClick:()=>{aF(!1),an?(aB("salary-slip"),az(!0)):Z.toast.error("Please generate payroll first")},children:[(0,b.jsx)(x.CreditCard,{className:"h-8 w-8 text-green-600"}),(0,b.jsxs)("div",{children:[(0,b.jsx)("div",{className:"font-semibold",children:"Salary Slip"}),(0,b.jsx)("div",{className:"text-xs text-gray-500 mt-1",children:"A4 Format"})]})]}),(0,b.jsxs)(J.Button,{variant:"outline",className:"h-auto py-5 flex-col gap-3 hover:bg-amber-50 hover:border-amber-300",onClick:()=>{aF(!1),aB("appointment"),az(!0)},children:[(0,b.jsx)(z,{className:"h-8 w-8 text-amber-600"}),(0,b.jsxs)("div",{children:[(0,b.jsx)("div",{className:"font-semibold",children:"Documents"}),(0,b.jsx)("div",{className:"text-xs text-gray-500 mt-1",children:"All letters"})]})]})]})]})}),(0,b.jsx)(T.default,{open:aC,onClose:()=>aD(!1),title:"Employee ID Card",maxWidth:"lg",children:(0,b.jsxs)("div",{className:"space-y-6",children:[(0,b.jsxs)("div",{className:"flex flex-col items-center",children:[(0,b.jsxs)("div",{className:"flex gap-2 mb-4",children:[(0,b.jsxs)(J.Button,{variant:"front"===aG?"default":"outline",size:"sm",onClick:()=>aH("front"),className:"gap-2",children:[(0,b.jsx)(H.Eye,{className:"h-4 w-4"}),"Front Side"]}),(0,b.jsxs)(J.Button,{variant:"back"===aG?"default":"outline",size:"sm",onClick:()=>aH("back"),className:"gap-2",children:[(0,b.jsx)(H.Eye,{className:"h-4 w-4"}),"Back Side"]})]}),(0,b.jsxs)("div",{className:"relative",children:[(0,b.jsx)("div",{className:"absolute -top-6 left-0 right-0 text-center",children:(0,b.jsxs)("div",{className:"inline-flex items-center gap-2 bg-gray-800 text-white text-xs px-3 py-1 rounded-full",children:[(0,b.jsx)(F,{className:"h-3 w-3"}),"Standard ID Card Size: 85.6mm × 54mm (Credit Card Size)"]})}),(0,b.jsx)("div",{className:"scale-100",id:"print-content",children:(0,b.jsxs)("div",{className:"id-card-container",id:"id-card-qr",children:["front"===aG&&(0,b.jsxs)("div",{className:"id-card-front bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white p-4 rounded-xl",children:[(0,b.jsxs)("div",{className:"id-header flex items-center mb-4",children:[(0,b.jsx)("div",{className:"id-logo h-12 w-12 rounded-full bg-white flex items-center justify-center mr-3",children:(0,b.jsx)("span",{className:"text-blue-600 font-bold text-lg",children:"EA"})}),(0,b.jsxs)("div",{className:"flex-1",children:[(0,b.jsx)("h1",{className:"text-lg font-bold",children:"EASE ACADEMY"}),(0,b.jsx)("p",{className:"text-xs opacity-90",children:"Staff Identity Card"})]})]}),(0,b.jsxs)("div",{className:"flex h-48",children:[(0,b.jsxs)("div",{className:"flex-1 pr-4",children:[(0,b.jsxs)("h2",{className:"text-2xl font-bold mb-2 leading-tight",children:[aj?.firstName," ",aj?.lastName]}),(0,b.jsx)("div",{className:"bg-white/20 px-3 py-1 rounded-full text-sm inline-block mb-4",children:aj?.staffProfile?.position||"Staff Member"}),(0,b.jsxs)("div",{className:"space-y-2 text-sm",children:[(0,b.jsxs)("div",{className:"flex",children:[(0,b.jsx)("span",{className:"w-24 opacity-80",children:"Employee ID:"}),(0,b.jsx)("span",{className:"font-bold flex-1",children:aj?.staffProfile?.employeeId})]}),(0,b.jsxs)("div",{className:"flex",children:[(0,b.jsx)("span",{className:"w-24 opacity-80",children:"Department:"}),(0,b.jsx)("span",{className:"font-bold flex-1",children:aj?.staffProfile?.departmentId?.name})]}),(0,b.jsxs)("div",{className:"flex",children:[(0,b.jsx)("span",{className:"w-24 opacity-80",children:"Valid Until:"}),(0,b.jsx)("span",{className:"font-bold flex-1",children:"Dec 2025"})]}),(0,b.jsxs)("div",{className:"flex",children:[(0,b.jsx)("span",{className:"w-24 opacity-80",children:"Issue Date:"}),(0,b.jsx)("span",{className:"font-bold flex-1",children:aj?.staffProfile?.joiningDate?(0,$.format)(new Date(aj.staffProfile.joiningDate),"MMM yyyy"):"N/A"})]})]})]}),(0,b.jsxs)("div",{className:"w-1/3 flex flex-col items-center justify-center border-l border-white/20 pl-4",children:[(0,b.jsx)("div",{className:"h-32 w-24 bg-white/10 rounded-lg flex items-center justify-center mb-3",children:(0,b.jsx)("div",{className:"text-4xl text-white",children:aj?.firstName?.charAt(0)})}),(0,b.jsx)("div",{className:"bg-white p-2 rounded-lg mb-2",children:(0,b.jsx)(U.QRCodeCanvas,{value:JSON.stringify({id:aj?._id,employeeId:aj?.staffProfile?.employeeId,name:`${aj?.firstName} ${aj?.lastName}`,branch:aj?.branchId?.name}),size:80,level:"H"})}),(0,b.jsx)("div",{className:"text-xs text-center font-mono bg-white/10 px-2 py-1 rounded",children:aj?.staffProfile?.employeeId})]})]}),(0,b.jsx)("div",{className:"mt-4 pt-3 border-t border-white/20 text-xs text-center opacity-80",children:"If found, please contact administration immediately."})]}),"back"===aG&&(0,b.jsxs)("div",{className:"id-card-back bg-gradient-to-br from-gray-900 to-gray-700 text-white p-4 rounded-xl",children:[(0,b.jsxs)("div",{className:"text-center mb-4",children:[(0,b.jsx)("div",{className:"h-8 w-full bg-gradient-to-r from-yellow-400 to-yellow-600 mb-4"}),(0,b.jsx)("h3",{className:"text-lg font-bold mb-2",children:"OFFICIAL STAFF ID CARD"}),(0,b.jsx)("p",{className:"text-xs opacity-80",children:"Ease Academy Management System"})]}),(0,b.jsxs)("div",{className:"space-y-3 text-sm",children:[(0,b.jsxs)("div",{className:"bg-white/10 p-3 rounded-lg",children:[(0,b.jsxs)("div",{className:"flex justify-between mb-2",children:[(0,b.jsx)("span",{className:"opacity-80",children:"Emergency Contact:"}),(0,b.jsx)("span",{className:"font-bold",children:aj?.staffProfile?.emergencyContact?.phone||"N/A"})]}),(0,b.jsx)("div",{className:"text-xs opacity-80",children:aj?.staffProfile?.emergencyContact?.name||"Not specified"})]}),(0,b.jsxs)("div",{className:"bg-white/10 p-3 rounded-lg",children:[(0,b.jsxs)("div",{className:"flex justify-between mb-2",children:[(0,b.jsx)("span",{className:"opacity-80",children:"Blood Group:"}),(0,b.jsx)("span",{className:"font-bold",children:aj?.bloodGroup||"N/A"})]}),(0,b.jsx)("div",{className:"text-xs opacity-80",children:"Medical Information"})]}),(0,b.jsxs)("div",{className:"mt-4",children:[(0,b.jsx)("div",{className:"barcode font-barcode text-4xl text-center tracking-widest",children:aj?.staffProfile?.employeeId?.replace(/[^0-9]/g,"")||"1234567890"}),(0,b.jsx)("div",{className:"text-xs text-center mt-2 opacity-80",children:"SCAN FOR VERIFICATION"})]})]}),(0,b.jsx)("div",{className:"mt-4 pt-3 border-t border-white/20 text-xs",children:(0,b.jsxs)("div",{className:"flex justify-between",children:[(0,b.jsxs)("div",{children:[(0,b.jsxs)("div",{children:["ID: ",Math.random().toString(36).substr(2,8).toUpperCase()]}),(0,b.jsx)("div",{children:"Issued By: Ease Academy HR"})]}),(0,b.jsxs)("div",{className:"text-right",children:[(0,b.jsx)("div",{children:"Non-Transferable"}),(0,b.jsx)("div",{children:"Property of Ease Academy"})]})]})})]})]})})]}),(0,b.jsxs)("div",{className:"mt-4 flex items-center gap-2 text-sm text-gray-600",children:[(0,b.jsx)(E.QrCode,{className:"h-4 w-4"}),(0,b.jsx)("span",{children:"QR contains employee verification data"})]})]}),(0,b.jsxs)("div",{className:"flex flex-col sm:flex-row gap-3 pt-6 border-t",children:[(0,b.jsx)(J.Button,{variant:"outline",onClick:()=>aD(!1),className:"flex-1",children:"Close"}),(0,b.jsxs)(J.Button,{onClick:()=>{let a=document.getElementById("id-card-qr")?.querySelector("canvas");if(a){let b=a.toDataURL("image/png"),c=document.createElement("a");c.download=`${aj?.firstName}-${aj?.lastName}-qr.png`,c.href=b,c.click()}},variant:"outline",className:"flex-1 gap-2",children:[(0,b.jsx)(h.Download,{className:"h-4 w-4"}),"Download QR"]}),(0,b.jsxs)(J.Button,{onClick:()=>{aD(!1),setTimeout(()=>aM("idcard"),300)},className:"flex-1 gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white",children:[(0,b.jsx)(k.Printer,{className:"h-4 w-4"}),"Print ID Card"]})]})]})}),(0,b.jsx)(T.default,{open:ay,onClose:()=>az(!1),title:"Document Preview",maxWidth:"4xl",children:(0,b.jsxs)("div",{className:"space-y-6",children:[(0,b.jsx)("div",{className:"border rounded-lg p-4 bg-gray-50 max-h-[60vh] overflow-y-auto",children:(0,b.jsx)("div",{id:"print-content",children:(0,b.jsxs)("div",{className:"bg-white p-8 print:p-0",children:[(0,b.jsxs)("div",{className:"text-center border-b-2 border-blue-600 pb-6 mb-8 print:pb-4 print:mb-6",children:[(0,b.jsxs)("div",{className:"flex items-center justify-center gap-4 mb-4 print:mb-2",children:[(0,b.jsx)("div",{className:"h-16 w-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center print:h-12 print:w-12",children:(0,b.jsx)("span",{className:"text-white font-bold text-2xl print:text-xl",children:"EA"})}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h1",{className:"text-3xl font-bold text-blue-900 print:text-2xl",children:"EASE ACADEMY"}),(0,b.jsx)("p",{className:"text-gray-600 mt-2 print:text-sm",children:"Excellence in Education & Administration"})]})]}),(0,b.jsxs)("div",{className:"flex flex-wrap justify-center gap-4 mt-4 text-sm text-gray-500 print:text-xs print:gap-2",children:[(0,b.jsxs)("p",{className:"flex items-center gap-1",children:[(0,b.jsx)(n.Phone,{className:"h-3 w-3"}),"+92 300 1234567"]}),(0,b.jsxs)("p",{className:"flex items-center gap-1",children:[(0,b.jsx)(m.Mail,{className:"h-3 w-3"}),"info@easeacademy.edu.pk"]}),(0,b.jsxs)("p",{className:"flex items-center gap-1",children:[(0,b.jsx)(G.Globe,{className:"h-3 w-3"}),"www.easeacademy.edu.pk"]})]})]}),(0,b.jsxs)("div",{className:"text-center mb-8 print:mb-6",children:[(0,b.jsx)("h2",{className:"text-2xl font-bold uppercase tracking-wider text-gray-800 border-b pb-4 print:text-xl",children:aN(aA).subject}),(0,b.jsxs)("p",{className:"text-gray-500 mt-4 print:mt-2",children:["Date: ",(0,$.format)(new Date,"MMMM dd, yyyy")]})]}),(0,b.jsx)("div",{className:"mb-8 p-6 bg-gray-50 rounded-xl border border-gray-200 print:p-4",children:(0,b.jsxs)("div",{className:"flex items-start gap-3",children:[(0,b.jsx)(l.User,{className:"h-5 w-5 text-gray-400 mt-1 flex-shrink-0"}),(0,b.jsxs)("div",{className:"flex-1",children:[(0,b.jsx)("p",{className:"font-bold text-gray-700 mb-2",children:"TO:"}),(0,b.jsxs)("p",{className:"text-lg font-semibold text-gray-900 print:text-base",children:[aj.firstName," ",aj.lastName]}),(0,b.jsx)("p",{className:"text-gray-600",children:aj.staffProfile?.position||"Staff Member"}),(0,b.jsxs)("p",{className:"text-gray-600",children:["Employee ID: ",aj.staffProfile?.employeeId||"N/A"]}),(0,b.jsx)("p",{className:"text-gray-600",children:aj.branchId?.name||"Ease Academy"})]}),(0,b.jsx)("div",{className:"text-right",children:(0,b.jsxs)("p",{className:"text-sm text-gray-500",children:["Ref: ",Math.random().toString(36).substr(2,9).toUpperCase()]})})]})}),(0,b.jsx)("div",{className:"prose prose-lg max-w-none mb-12 print:prose-base print:mb-8",children:(a=aN(aA),(0,b.jsx)("div",{dangerouslySetInnerHTML:{__html:a.content}}))}),(0,b.jsxs)("div",{className:"mt-16 pt-8 border-t flex flex-col sm:flex-row justify-between gap-8 print:mt-12 print:pt-6",children:[(0,b.jsxs)("div",{className:"text-center flex-1",children:[(0,b.jsx)("div",{className:"h-1 w-48 bg-gray-400 mx-auto mb-2"}),(0,b.jsxs)("p",{className:"font-bold text-gray-900 mt-4",children:[aj.firstName," ",aj.lastName]}),(0,b.jsx)("p",{className:"text-sm text-gray-500",children:"Employee Signature"}),(0,b.jsx)("div",{className:"mt-2 text-xs text-gray-400",children:"Date: ________________"})]}),(0,b.jsxs)("div",{className:"text-center flex-1",children:[(0,b.jsx)("div",{className:"h-1 w-48 bg-gray-400 mx-auto mb-2"}),(0,b.jsx)("p",{className:"font-bold text-gray-900 mt-4",children:"Principal / Administrator"}),(0,b.jsx)("p",{className:"text-sm text-gray-500",children:"Authorized Signature & Stamp"}),(0,b.jsx)("div",{className:"mt-2 text-xs text-gray-400",children:"Date: ________________"})]})]}),(0,b.jsxs)("div",{className:"mt-12 text-center text-xs text-gray-400 print:mt-8",children:[(0,b.jsx)("p",{children:"This is a computer-generated document. No physical signature required."}),(0,b.jsxs)("p",{className:"mt-1",children:["Document ID: ",Math.random().toString(36).substr(2,9).toUpperCase()]}),(0,b.jsxs)("p",{className:"mt-1",children:["Generated on: ",(0,$.format)(new Date,"yyyy-MM-dd hh:mm:ss a")]})]})]})})}),(0,b.jsxs)("div",{className:"flex flex-col sm:flex-row gap-3 pt-6 border-t",children:[(0,b.jsx)(J.Button,{variant:"outline",onClick:()=>az(!1),className:"flex-1",children:"Close Preview"}),(0,b.jsxs)(J.Button,{onClick:()=>aM("letter"),className:"flex-1 gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white",children:[(0,b.jsx)(k.Printer,{className:"h-4 w-4"}),"Print Document"]}),(0,b.jsxs)(J.Button,{variant:"outline",className:"flex-1 gap-2",children:[(0,b.jsx)(h.Download,{className:"h-4 w-4"}),"Download PDF"]})]})]})})]})}a.s(["default",()=>ab],178126)}];

//# sourceMappingURL=src_app_%28dashboard%29_super-admin_staff_%5Bid%5D_page_85f9c6f4.js.map