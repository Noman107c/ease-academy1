(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,266432,e=>{"use strict";var s=e.i(843476),t=e.i(271645),a=e.i(618566),r=e.i(269012),l=e.i(871689),i=e.i(87316),n=e.i(440160),d=e.i(178583),c=e.i(501026),o=e.i(303281),m=e.i(284614),x=e.i(263488),h=e.i(343432),p=e.i(346897),f=e.i(503116),g=e.i(212426),b=e.i(842009),u=e.i(269638),j=e.i(373884),N=e.i(63209),y=e.i(63727),v=e.i(342920),w=e.i(561659),C=e.i(475254);let D=(0,C.default)("file-pen-line",[["path",{d:"m18.226 5.226-2.52-2.52A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.351",key:"1k2beg"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"2t3380"}],["path",{d:"M8 18h1",key:"13wk12"}]]);var S=e.i(98919),P=e.i(25652),k=e.i(217923),A=e.i(626912),M=e.i(823962);let I=(0,C.default)("scan",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);var E=e.i(248256),T=e.i(286536),$=e.i(239616),z=e.i(656902),L=e.i(18670),R=e.i(587167),_=e.i(196039);function B({className:e="",orientation:t="horizontal",...a}){return(0,s.jsx)("div",{className:`
        ${"horizontal"===t?"h-px w-full bg-gray-200 dark:bg-gray-700":"h-full w-px bg-gray-200 dark:bg-gray-700"}
        ${e}
      `,...a})}function F({value:e=0,max:t=100,className:a="",...r}){let l=Math.min(Math.max(e/t*100,0),100);return(0,s.jsx)("div",{className:`
        relative h-2 w-full overflow-hidden rounded-full 
        bg-gray-200 dark:bg-gray-700
        ${a}
      `,...r,children:(0,s.jsx)("div",{className:"h-full bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 transition-all duration-300 ease-out",style:{width:`${l}%`},role:"progressbar","aria-valuenow":e,"aria-valuemin":0,"aria-valuemax":t})})}function O({className:e="",children:t,...a}){return(0,s.jsx)("div",{className:`relative flex items-center justify-center overflow-hidden bg-gray-200 dark:bg-gray-700 ${e}`,...a,children:t})}function U({children:e,className:t=""}){return(0,s.jsx)("div",{className:`flex items-center justify-center h-full w-full font-semibold ${t}`,children:e})}var H=e.i(565930),Y=e.i(511917),G=e.i(22466),q=e.i(928835),J=e.i(710935),K=e.i(432616),Q=e.i(521281),W=e.i(397437),V=e.i(846696),X=e.i(401851);let Z=["January","February","March","April","May","June","July","August","September","October","November","December"],ee=[{id:"appointment",label:"Appointment Letter",icon:D,color:"bg-blue-500"},{id:"duty-allocation",label:"Duty Allocation",icon:y.Briefcase,color:"bg-green-500"},{id:"salary-slip",label:"Salary Slip",icon:w.CreditCard,color:"bg-amber-500"},{id:"leave-approval",label:"Leave Approval",icon:i.Calendar,color:"bg-purple-500"},{id:"warning",label:"Warning Letter",icon:N.AlertCircle,color:"bg-red-500"},{id:"increment",label:"Increment Letter",icon:P.TrendingUp,color:"bg-emerald-500"},{id:"experience",label:"Experience Certificate",icon:b.Award,color:"bg-indigo-500"},{id:"relieving",label:"Relieving Letter",icon:A.FileCheck,color:"bg-orange-500"},{id:"termination",label:"Termination Letter",icon:j.XCircle,color:"bg-rose-500"}];function es(){let e,{user:b}=(0,r.useAuth)(),C=(0,a.useRouter)(),P=(0,a.useParams)(),[A,es]=(0,t.useState)(null),et=A?.id,[ea,er]=(0,t.useState)(!0),[el,ei]=(0,t.useState)(!1),[en,ed]=(0,t.useState)("overview"),[ec,eo]=(0,t.useState)(null),[em,ex]=(0,t.useState)([]),[eh,ep]=(0,t.useState)(null),[ef,eg]=(0,t.useState)(null),eb=new Date,[eu,ej]=(0,t.useState)(eb.getMonth()+1),[eN,ey]=(0,t.useState)(eb.getFullYear()),[ev,ew]=(0,t.useState)([]),[eC,eD]=(0,t.useState)(!1),[eS,eP]=(0,t.useState)(""),[ek,eA]=(0,t.useState)(!1),[eM,eI]=(0,t.useState)(!1),[eE,eT]=(0,t.useState)("front");(0,t.useRef)(null),(0,t.useEffect)(()=>{(async()=>{P&&es(await P)})()},[P]),(0,t.useEffect)(()=>{b&&et&&e$()},[b,et]),(0,t.useEffect)(()=>{ec&&eu&&eN&&eL()},[ec,eu,eN]);let e$=async()=>{try{er(!0);let e=await J.default.get(K.API_ENDPOINTS.SUPER_ADMIN.STAFF.GET.replace(":id",et));e.success&&e.data?(eo(e.data),ez(e.data)):(V.toast.error("Staff member not found"),C.back())}catch(e){console.error("Error fetching staff:",e),V.toast.error("Failed to load staff data"),C.back()}finally{er(!1)}},ez=e=>{let s=new Date(e.staffProfile?.joiningDate||e.createdAt),t=new Date,a=[],r=new Date(s.getFullYear(),s.getMonth(),1),l=new Date(t.getFullYear(),t.getMonth(),1);for(;r<=l;)a.push({month:r.getMonth()+1,year:r.getFullYear(),label:`${Z[r.getMonth()]} ${r.getFullYear()}`}),r.setMonth(r.getMonth()+1);ew(a.reverse())},eL=async()=>{try{let e=await J.default.get(K.API_ENDPOINTS.SUPER_ADMIN.EMPLOYEE_ATTENDANCE.LIST,{userId:et,month:eu,year:eN,limit:100});e.success&&ex(e.data);let s=await J.default.get(K.API_ENDPOINTS.SUPER_ADMIN.EMPLOYEE_ATTENDANCE.SUMMARY,{userId:et,month:eu,year:eN});s.success&&eg(s.data);let t=await J.default.get(K.API_ENDPOINTS.SUPER_ADMIN.PAYROLL.LIST,{userId:et,month:eu,year:eN});t.success&&t.data?.length>0?ep(t.data[0]):ep(null)}catch(e){console.error("Error fetching monthly data:",e)}},eR=async()=>{try{ei(!0),(await J.default.post(K.API_ENDPOINTS.SUPER_ADMIN.PAYROLL.PROCESS,{userId:et,month:eu,year:eN})).success&&(V.toast.success("Payroll generated successfully"),eL())}catch(e){console.error("Error generating payroll:",e),V.toast.error(e.message||"Failed to generate payroll")}finally{ei(!1)}},e_=(e="report")=>{let s=document.getElementById("print-content");if(!s)return;let t=window.open("","_blank");"idcard"===e?t.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>ID Card - ${ec?.firstName} ${ec?.lastName}</title>
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
            ${s.innerHTML}
          </body>
        </html>
      `):"report"===e&&t.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>${ec?.firstName} ${ec?.lastName} - Monthly Report</title>
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
            ${s.innerHTML}
            <div class="print-date">
              Printed on: ${(0,X.format)(new Date,"MMMM dd, yyyy hh:mm a")}
            </div>
          </body>
        </html>
      `),t.document.close(),setTimeout(()=>{t.focus(),t.print()},500)},eB=e=>{if(!ec)return null;let s=`${ec.firstName} ${ec.lastName}`,t=ec.staffProfile?.position||"Staff Member",a=ec.staffProfile?.departmentId?.name||"General",r=ec.branchId?.name||"Ease Academy",l=ec.staffProfile?.employeeId||"N/A",i=(0,X.format)(new Date,"MMMM dd, yyyy"),n="",d="";switch(e){case"appointment":n="APPOINTMENT LETTER",d=`
          <p>Dear ${s},</p>
          <p>We are pleased to appoint you as <strong>${t}</strong> in the ${a} Department at ${r}, effective from ${(0,X.format)(new Date(ec.staffProfile?.joiningDate||new Date),"MMMM dd, yyyy")}.</p>
          <p>Your Employee ID is: <strong>${l}</strong></p>
          <p>This appointment is subject to the rules and regulations of the institution. Your initial probation period will be three months, after which your performance will be reviewed for confirmation.</p>
          <p>We welcome you to our team and look forward to a productive association.</p>
        `;break;case"salary-slip":n=`SALARY SLIP - ${Z[eu-1]} ${eN}`,d=`
          <div class="grid-2-col">
            <div>
              <div class="info-item">
                <div class="info-label">Employee Name</div>
                <div class="info-value">${s}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Employee ID</div>
                <div class="info-value">${l}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Designation</div>
                <div class="info-value">${t}</div>
              </div>
            </div>
            <div>
              <div class="info-item">
                <div class="info-label">Department</div>
                <div class="info-value">${a}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Month</div>
                <div class="info-value">${Z[eu-1]} ${eN}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Payment Date</div>
                <div class="info-value">${i}</div>
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
                  <td>${eh?.basicSalary?.toLocaleString()||"0"}</td>
                </tr>
                <tr>
                  <td>House Rent Allowance</td>
                  <td>${(eh?.allowances?.houseRent||0).toLocaleString()}</td>
                </tr>
                <tr>
                  <td>Medical Allowance</td>
                  <td>${(eh?.allowances?.medical||0).toLocaleString()}</td>
                </tr>
                <tr>
                  <td><strong>Total Earnings</strong></td>
                  <td><strong>${(eh?.grossSalary||0).toLocaleString()}</strong></td>
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
                  <td>${(eh?.deductions?.tax||0).toLocaleString()}</td>
                </tr>
                <tr>
                  <td>Provident Fund</td>
                  <td>${(eh?.deductions?.providentFund||0).toLocaleString()}</td>
                </tr>
                <tr>
                  <td><strong>Total Deductions</strong></td>
                  <td><strong>${(eh?.totalDeductions||0).toLocaleString()}</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div class="section" style="background: #f0f9ff; padding: 20px; border-radius: 8px; border: 2px solid #1e40af;">
            <h2 style="color: #1e40af; margin-top: 0;">Net Payable Amount</h2>
            <div style="font-size: 24pt; font-weight: bold; color: #1e40af; text-align: center; margin: 20px 0;">
              PKR ${(eh?.netSalary||0).toLocaleString()}
            </div>
            <div style="text-align: center; font-size: 12pt;">
              Payment Status: <strong>${eh?.paymentStatus?.toUpperCase()||"PENDING"}</strong>
            </div>
          </div>
        `;break;default:n=ee.find(s=>s.id===e)?.label?.toUpperCase()||"OFFICIAL DOCUMENT",d=`
          <p>Dear ${s},</p>
          <p>This document serves as an official ${n} issued by ${r}.</p>
          <div class="section">
            <h2>Employee Details</h2>
            <div class="grid-2-col">
              <div class="info-item">
                <div class="info-label">Full Name</div>
                <div class="info-value">${s}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Employee ID</div>
                <div class="info-value">${l}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Designation</div>
                <div class="info-value">${t}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Department</div>
                <div class="info-value">${a}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Date of Issue</div>
                <div class="info-value">${i}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Branch</div>
                <div class="info-value">${r}</div>
              </div>
            </div>
          </div>
          <p>This document is digitally generated and authenticated by the ${r} Management System.</p>
        `}return{subject:n,content:d}};if(ea)return(0,s.jsx)(Q.default,{message:"Loading staff details..."});if(!ec)return(0,s.jsx)("div",{className:"flex items-center justify-center min-h-screen",children:(0,s.jsx)(L.Card,{className:"w-full max-w-md",children:(0,s.jsxs)(L.CardContent,{className:"pt-6 text-center",children:[(0,s.jsx)(N.AlertCircle,{className:"h-12 w-12 text-red-500 mx-auto mb-4"}),(0,s.jsx)("h2",{className:"text-xl font-semibold mb-2",children:"Staff Member Not Found"}),(0,s.jsx)("p",{className:"text-gray-500 mb-4",children:"The requested staff member does not exist or you don't have permission to view."}),(0,s.jsx)(z.Button,{onClick:()=>C.back(),children:"Go Back"})]})})});let eF=em.filter(e=>"present"===e.status).length,eO=em.filter(e=>"absent"===e.status).length,eU=em.filter(e=>"leave"===e.status).length,eH=(()=>{if(!ef||!em.length)return 0;let e=em.length;return Math.round(em.filter(e=>"present"===e.status).length/e*100)})();return(0,s.jsxs)("div",{className:"min-h-screen bg-gradient-to-b from-gray-50 to-gray-100",children:[(0,s.jsxs)("div",{className:"container mx-auto p-4 md:p-6",children:[(0,s.jsxs)("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6",children:[(0,s.jsxs)("div",{className:"flex items-center gap-3",children:[(0,s.jsx)(z.Button,{variant:"outline",size:"icon",onClick:()=>C.back(),className:"rounded-full hover:bg-gray-100",children:(0,s.jsx)(l.ArrowLeft,{className:"h-4 w-4"})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{className:"text-2xl md:text-3xl font-bold text-gray-900",children:"Staff Profile"}),(0,s.jsxs)("p",{className:"text-gray-500",children:["Complete details and management for ",ec.firstName," ",ec.lastName]})]})]}),(0,s.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,s.jsxs)(z.Button,{variant:"outline",onClick:()=>eA(!0),className:"gap-2 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200",children:[(0,s.jsx)(c.IdCard,{className:"h-4 w-4"}),"ID Card"]}),(0,s.jsxs)(z.Button,{onClick:()=>eI(!0),className:"gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white",children:[(0,s.jsx)(o.Printer,{className:"h-4 w-4"}),"Print Options"]})]})]}),(0,s.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[(0,s.jsxs)("div",{className:"lg:col-span-1 space-y-6",children:[(0,s.jsx)(L.Card,{className:"border border-gray-200 shadow-sm hover:shadow-md transition-shadow",children:(0,s.jsxs)(L.CardContent,{className:"p-6",children:[(0,s.jsxs)("div",{className:"flex flex-col items-center text-center mb-6",children:[(0,s.jsx)(O,{className:"h-32 w-32 border-4 border-white shadow-lg mb-4",children:(0,s.jsxs)(U,{className:"bg-gradient-to-br from-blue-500 to-purple-600 text-3xl text-white",children:[ec.firstName?.charAt(0),ec.lastName?.charAt(0)]})}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("h2",{className:"text-2xl font-bold",children:[ec.firstName," ",ec.lastName]}),(0,s.jsx)(R.Badge,{className:"mt-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0",children:ec.role.charAt(0).toUpperCase()+ec.role.slice(1)})]})]}),(0,s.jsxs)("div",{className:"grid grid-cols-2 gap-3 mb-6",children:[(0,s.jsxs)("div",{className:"bg-blue-50 rounded-lg p-3 text-center",children:[(0,s.jsx)("div",{className:"text-xs text-blue-600 mb-1",children:"Staff Since"}),(0,s.jsx)("div",{className:"font-bold text-blue-900",children:ec.staffProfile?.joiningDate?(0,X.format)(new Date(ec.staffProfile.joiningDate),"MMM yyyy"):"N/A"})]}),(0,s.jsxs)("div",{className:"bg-green-50 rounded-lg p-3 text-center",children:[(0,s.jsx)("div",{className:"text-xs text-green-600 mb-1",children:"Attendance"}),(0,s.jsxs)("div",{className:"font-bold text-green-900",children:[eH,"%"]})]})]}),(0,s.jsxs)("div",{className:"space-y-3",children:[(0,s.jsxs)("div",{className:"flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors",children:[(0,s.jsx)("div",{className:"h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center",children:(0,s.jsx)(c.IdCard,{className:"h-5 w-5 text-blue-600"})}),(0,s.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,s.jsx)("p",{className:"text-xs text-gray-500 truncate",children:"Employee ID"}),(0,s.jsx)("p",{className:"font-semibold truncate",children:ec.staffProfile?.employeeId||"N/A"})]})]}),(0,s.jsxs)("div",{className:"flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors",children:[(0,s.jsx)("div",{className:"h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center",children:(0,s.jsx)(y.Briefcase,{className:"h-5 w-5 text-gray-600"})}),(0,s.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,s.jsx)("p",{className:"text-xs text-gray-500 truncate",children:"Designation"}),(0,s.jsx)("p",{className:"font-semibold truncate",children:ec.staffProfile?.position||"Staff"})]})]}),(0,s.jsxs)("div",{className:"flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors",children:[(0,s.jsx)("div",{className:"h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center",children:(0,s.jsx)(v.Building,{className:"h-5 w-5 text-gray-600"})}),(0,s.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,s.jsx)("p",{className:"text-xs text-gray-500 truncate",children:"Department"}),(0,s.jsx)("p",{className:"font-semibold truncate",children:ec.staffProfile?.departmentId?.name||"N/A"})]})]})]}),(0,s.jsx)(B,{className:"my-6"}),(0,s.jsxs)("h3",{className:"font-semibold mb-4 flex items-center gap-2",children:[(0,s.jsx)(m.User,{className:"h-4 w-4"}),"Contact Information"]}),(0,s.jsxs)("div",{className:"space-y-3",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2 text-sm",children:[(0,s.jsx)(x.Mail,{className:"h-4 w-4 text-gray-400 flex-shrink-0"}),(0,s.jsx)("span",{className:"truncate",children:ec.email})]}),ec.phone&&(0,s.jsxs)("div",{className:"flex items-center gap-2 text-sm",children:[(0,s.jsx)(h.Phone,{className:"h-4 w-4 text-gray-400 flex-shrink-0"}),(0,s.jsx)("span",{className:"truncate",children:ec.phone})]}),ec.address?.city&&(0,s.jsxs)("div",{className:"flex items-center gap-2 text-sm",children:[(0,s.jsx)(p.MapPin,{className:"h-4 w-4 text-gray-400 flex-shrink-0"}),(0,s.jsxs)("span",{className:"truncate",children:[ec.address.city,", ",ec.address.country]})]})]})]})}),(0,s.jsxs)(L.Card,{className:"border border-gray-200 shadow-sm",children:[(0,s.jsx)(L.CardHeader,{className:"pb-3",children:(0,s.jsxs)(L.CardTitle,{className:"text-lg flex items-center gap-2",children:[(0,s.jsx)($.Settings,{className:"h-5 w-5"}),"Quick Actions"]})}),(0,s.jsx)(L.CardContent,{className:"pt-0",children:(0,s.jsxs)("div",{className:"grid grid-cols-2 gap-2",children:[(0,s.jsxs)(z.Button,{variant:"outline",size:"sm",className:"justify-start gap-2 hover:bg-blue-50",onClick:()=>{eP("salary-slip"),eD(!0)},children:[(0,s.jsx)(w.CreditCard,{className:"h-4 w-4"}),"Salary Slip"]}),(0,s.jsxs)(z.Button,{variant:"outline",size:"sm",className:"justify-start gap-2 hover:bg-green-50",onClick:()=>C.push(`/staff/${et}/attendance`),children:[(0,s.jsx)(u.CheckCircle,{className:"h-4 w-4"}),"Attendance"]}),(0,s.jsxs)(z.Button,{variant:"outline",size:"sm",className:"justify-start gap-2 hover:bg-purple-50",onClick:()=>{eP("appointment"),eD(!0)},children:[(0,s.jsx)(D,{className:"h-4 w-4"}),"Letters"]}),(0,s.jsxs)(z.Button,{variant:"outline",size:"sm",className:"justify-start gap-2 hover:bg-amber-50",onClick:()=>e_("report"),children:[(0,s.jsx)(o.Printer,{className:"h-4 w-4"}),"Print Report"]})]})})]})]}),(0,s.jsxs)("div",{className:"lg:col-span-2 space-y-6",children:[(0,s.jsxs)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[(0,s.jsx)(L.Card,{className:"border border-gray-200 shadow-sm hover:shadow-md transition-shadow",children:(0,s.jsxs)(L.CardContent,{className:"p-4",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"text-sm text-gray-500",children:"Present Days"}),(0,s.jsx)("p",{className:"text-2xl font-bold text-gray-900",children:eF})]}),(0,s.jsx)("div",{className:"h-10 w-10 rounded-full bg-green-100 flex items-center justify-center",children:(0,s.jsx)(u.CheckCircle,{className:"h-5 w-5 text-green-600"})})]}),(0,s.jsx)(F,{value:4*eF,className:"h-1.5 mt-3 bg-gray-100"})]})}),(0,s.jsx)(L.Card,{className:"border border-gray-200 shadow-sm hover:shadow-md transition-shadow",children:(0,s.jsxs)(L.CardContent,{className:"p-4",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"text-sm text-gray-500",children:"Absent Days"}),(0,s.jsx)("p",{className:"text-2xl font-bold text-gray-900",children:eO})]}),(0,s.jsx)("div",{className:"h-10 w-10 rounded-full bg-red-100 flex items-center justify-center",children:(0,s.jsx)(j.XCircle,{className:"h-5 w-5 text-red-600"})})]}),(0,s.jsx)(F,{value:4*eO,className:"h-1.5 mt-3 bg-gray-100"})]})}),(0,s.jsx)(L.Card,{className:"border border-gray-200 shadow-sm hover:shadow-md transition-shadow",children:(0,s.jsxs)(L.CardContent,{className:"p-4",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"text-sm text-gray-500",children:"Leaves"}),(0,s.jsx)("p",{className:"text-2xl font-bold text-gray-900",children:eU})]}),(0,s.jsx)("div",{className:"h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center",children:(0,s.jsx)(i.Calendar,{className:"h-5 w-5 text-purple-600"})})]}),(0,s.jsx)(F,{value:4*eU,className:"h-1.5 mt-3 bg-gray-100"})]})}),(0,s.jsx)(L.Card,{className:"border border-gray-200 shadow-sm hover:shadow-md transition-shadow",children:(0,s.jsxs)(L.CardContent,{className:"p-4",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"text-sm text-gray-500",children:"Attendance"}),(0,s.jsxs)("p",{className:"text-2xl font-bold text-gray-900",children:[eH,"%"]})]}),(0,s.jsx)("div",{className:"h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center",children:(0,s.jsx)(k.BarChart3,{className:"h-5 w-5 text-blue-600"})})]}),(0,s.jsx)(F,{value:eH,className:"h-1.5 mt-3 bg-gray-100"})]})})]}),(0,s.jsx)(L.Card,{className:"border border-gray-200 shadow-sm",children:(0,s.jsx)(L.CardContent,{className:"p-4",children:(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center gap-4",children:[(0,s.jsxs)("div",{className:"flex-1",children:[(0,s.jsx)(H.Label,{className:"mb-2 block text-sm font-medium",children:"Select Month & Year"}),(0,s.jsxs)("div",{className:"flex gap-2",children:[(0,s.jsx)(Y.default,{value:`${eu}-${eN}`,onChange:e=>{let[s,t]=e.target.value.split("-");ej(parseInt(s)),ey(parseInt(t))},options:ev.map(e=>({value:`${e.month}-${e.year}`,label:e.label})),placeholder:"Select month",className:"flex-1"}),(0,s.jsx)(z.Button,{variant:"outline",size:"icon",onClick:()=>e_("report"),className:"flex-shrink-0",children:(0,s.jsx)(o.Printer,{className:"h-4 w-4"})})]})]}),(0,s.jsxs)("div",{className:"text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg",children:["Showing data for ",(0,s.jsxs)("span",{className:"font-semibold text-gray-900",children:[Z[eu-1]," ",eN]})]})]})})}),(0,s.jsx)(_.default,{tabs:[{id:"overview",label:"Overview",icon:(0,s.jsx)(m.User,{className:"h-4 w-4"})},{id:"attendance",label:"Attendance",icon:(0,s.jsx)(u.CheckCircle,{className:"h-4 w-4"}),badge:em.length},{id:"payroll",label:"Payroll",icon:(0,s.jsx)(g.DollarSign,{className:"h-4 w-4"})},{id:"documents",label:"Documents",icon:(0,s.jsx)(d.FileText,{className:"h-4 w-4"})}],activeTab:en,onChange:ed}),(0,s.jsx)(_.TabPanel,{value:"overview",activeTab:en,children:(0,s.jsxs)(L.Card,{className:"border border-gray-200 shadow-sm",children:[(0,s.jsx)(L.CardHeader,{children:(0,s.jsx)(L.CardTitle,{children:"Employment Details"})}),(0,s.jsx)(L.CardContent,{children:(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsxs)("h3",{className:"font-semibold flex items-center gap-2",children:[(0,s.jsx)(y.Briefcase,{className:"h-4 w-4"}),"Job Information"]}),(0,s.jsx)("div",{className:"space-y-3",children:[{label:"Designation",value:ec.staffProfile?.position||"N/A"},{label:"Department",value:ec.staffProfile?.departmentId?.name||"N/A"},{label:"Shift",value:(ec.staffProfile?.shift||"Morning").toUpperCase()},{label:"Employment Type",value:(ec.staffProfile?.employmentType||"Permanent").toUpperCase()},{label:"Joining Date",value:ec.staffProfile?.joiningDate?(0,X.format)(new Date(ec.staffProfile.joiningDate),"MMMM dd, yyyy"):"N/A"}].map((e,t)=>(0,s.jsxs)("div",{className:"flex justify-between items-center py-2 border-b border-gray-100 last:border-0",children:[(0,s.jsx)("span",{className:"text-gray-600 text-sm",children:e.label}),(0,s.jsx)("span",{className:"font-medium text-gray-900",children:e.value})]},t))})]}),(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsxs)("h3",{className:"font-semibold flex items-center gap-2",children:[(0,s.jsx)(S.Shield,{className:"h-4 w-4"}),"Personal Details"]}),(0,s.jsx)("div",{className:"space-y-3",children:[{label:"CNIC",value:ec.cnic||"N/A"},{label:"Phone",value:ec.phone||"N/A"},{label:"Emergency Contact",value:ec.staffProfile?.emergencyContact?.phone?`${ec.staffProfile.emergencyContact.name} (${ec.staffProfile.emergencyContact.phone})`:"N/A"},{label:"Blood Group",value:ec.bloodGroup||"N/A"},{label:"Nationality",value:ec.nationality||"Pakistani"}].map((e,t)=>(0,s.jsxs)("div",{className:"flex justify-between items-center py-2 border-b border-gray-100 last:border-0",children:[(0,s.jsx)("span",{className:"text-gray-600 text-sm",children:e.label}),(0,s.jsx)("span",{className:"font-medium text-gray-900 text-right",children:e.value})]},t))})]})]})})]})}),(0,s.jsx)(_.TabPanel,{value:"attendance",activeTab:en,children:(0,s.jsxs)(L.Card,{className:"border border-gray-200 shadow-sm",children:[(0,s.jsx)(L.CardHeader,{children:(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(L.CardTitle,{children:"Attendance Records"}),(0,s.jsxs)(L.CardDescription,{children:[em.length," records for ",Z[eu-1]," ",eN]})]}),(0,s.jsxs)(z.Button,{variant:"outline",size:"sm",onClick:()=>e_("report"),className:"gap-2",children:[(0,s.jsx)(o.Printer,{className:"h-4 w-4"}),"Print Report"]})]})}),(0,s.jsx)(L.CardContent,{children:0===em.length?(0,s.jsxs)("div",{className:"text-center py-12 border-2 border-dashed border-gray-200 rounded-lg",children:[(0,s.jsx)(i.Calendar,{className:"h-12 w-12 mx-auto mb-4 text-gray-300"}),(0,s.jsx)("p",{className:"text-gray-500 mb-2",children:"No attendance records found for this month"})]}):(0,s.jsx)("div",{className:"overflow-x-auto rounded-lg border border-gray-200",children:(0,s.jsxs)("table",{className:"w-full",children:[(0,s.jsx)("thead",{className:"bg-gray-50",children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{className:"p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Date"}),(0,s.jsx)("th",{className:"p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Day"}),(0,s.jsx)("th",{className:"p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Status"}),(0,s.jsx)("th",{className:"p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Check In"}),(0,s.jsx)("th",{className:"p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Check Out"}),(0,s.jsx)("th",{className:"p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Hours"})]})}),(0,s.jsx)("tbody",{className:"divide-y divide-gray-200",children:em.map(e=>{var t;let a,r,l;return(0,s.jsxs)("tr",{className:"hover:bg-gray-50",children:[(0,s.jsx)("td",{className:"p-3 text-sm",children:(0,X.format)(new Date(e.date),"MMM dd, yyyy")}),(0,s.jsx)("td",{className:"p-3 text-sm",children:(0,X.format)(new Date(e.date),"EEE")}),(0,s.jsx)("td",{className:"p-3",children:(t=e.status,l=(r=(a={present:{color:"bg-green-100 text-green-800 border-green-200",icon:u.CheckCircle},absent:{color:"bg-red-100 text-red-800 border-red-200",icon:j.XCircle},late:{color:"bg-yellow-100 text-yellow-800 border-yellow-200",icon:f.Clock},"half-day":{color:"bg-blue-100 text-blue-800 border-blue-200",icon:f.Clock},leave:{color:"bg-purple-100 text-purple-800 border-purple-200",icon:i.Calendar}})[t]||a.present).icon,(0,s.jsxs)(R.Badge,{variant:"outline",className:`${r.color} gap-1.5`,children:[(0,s.jsx)(l,{className:"h-3.5 w-3.5"}),t.charAt(0).toUpperCase()+t.slice(1)]}))}),(0,s.jsx)("td",{className:"p-3 text-sm font-mono",children:e.checkIn?.time?(0,X.format)(new Date(e.checkIn.time),"hh:mm a"):"--:--"}),(0,s.jsx)("td",{className:"p-3 text-sm font-mono",children:e.checkOut?.time?(0,X.format)(new Date(e.checkOut.time),"hh:mm a"):"--:--"}),(0,s.jsx)("td",{className:"p-3 text-sm font-mono font-medium",children:e.workingHours?`${e.workingHours.toFixed(1)}h`:"-"})]},e._id)})})]})})})]})}),(0,s.jsx)(_.TabPanel,{value:"payroll",activeTab:en,children:(0,s.jsxs)(L.Card,{className:"border border-gray-200 shadow-sm",children:[(0,s.jsx)(L.CardHeader,{children:(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(L.CardTitle,{children:"Payroll Details"}),(0,s.jsxs)(L.CardDescription,{children:["Salary information for ",Z[eu-1]," ",eN]})]}),eh?(0,s.jsxs)(z.Button,{variant:"outline",size:"sm",onClick:()=>{eP("salary-slip"),eD(!0)},className:"gap-2",children:[(0,s.jsx)(o.Printer,{className:"h-4 w-4"}),"Print Salary Slip"]}):(0,s.jsx)(z.Button,{onClick:eR,disabled:el,className:"gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700",children:el?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(W.default,{}),"Processing..."]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(g.DollarSign,{className:"h-4 w-4"}),"Generate Payroll"]})})]})}),(0,s.jsx)(L.CardContent,{children:eh?(0,s.jsxs)("div",{className:"space-y-6",children:[(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[(0,s.jsx)(L.Card,{className:"border border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100",children:(0,s.jsxs)(L.CardContent,{className:"p-4",children:[(0,s.jsx)("p",{className:"text-sm font-medium text-blue-700 mb-1",children:"Basic Salary"}),(0,s.jsxs)("p",{className:"text-2xl font-bold text-blue-900",children:["Rs. ",eh.basicSalary?.toLocaleString()]}),(0,s.jsx)("div",{className:"text-xs text-blue-600 mt-2",children:"Monthly Fixed"})]})}),(0,s.jsx)(L.Card,{className:"border border-red-200 bg-gradient-to-br from-red-50 to-red-100",children:(0,s.jsxs)(L.CardContent,{className:"p-4",children:[(0,s.jsx)("p",{className:"text-sm font-medium text-red-700 mb-1",children:"Deductions"}),(0,s.jsxs)("p",{className:"text-2xl font-bold text-red-900",children:["Rs. ",eh.totalDeductions?.toLocaleString()]}),(0,s.jsx)("div",{className:"text-xs text-red-600 mt-2",children:"Tax + Provident Fund"})]})}),(0,s.jsx)(L.Card,{className:"border border-green-200 bg-gradient-to-br from-green-50 to-green-100",children:(0,s.jsxs)(L.CardContent,{className:"p-4",children:[(0,s.jsx)("p",{className:"text-sm font-medium text-green-700 mb-1",children:"Net Payable"}),(0,s.jsxs)("p",{className:"text-2xl font-bold text-green-900",children:["Rs. ",eh.netSalary?.toLocaleString()]}),(0,s.jsx)("div",{className:"text-xs text-green-600 mt-2",children:"After all deductions"})]})})]}),(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[(0,s.jsxs)(L.Card,{className:"border border-gray-200",children:[(0,s.jsx)(L.CardHeader,{className:"pb-3",children:(0,s.jsx)(L.CardTitle,{className:"text-lg",children:"Earnings"})}),(0,s.jsx)(L.CardContent,{children:(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsxs)("div",{className:"flex justify-between items-center p-3 bg-gray-50 rounded-lg",children:[(0,s.jsx)("span",{className:"font-medium",children:"Basic Salary"}),(0,s.jsxs)("span",{className:"font-bold text-green-700",children:["Rs. ",eh.basicSalary?.toLocaleString()]})]}),(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsxs)("div",{className:"flex justify-between",children:[(0,s.jsx)("span",{className:"text-gray-600",children:"House Rent Allowance"}),(0,s.jsxs)("span",{children:["Rs. ",(eh.allowances?.houseRent||0).toLocaleString()]})]}),(0,s.jsxs)("div",{className:"flex justify-between",children:[(0,s.jsx)("span",{className:"text-gray-600",children:"Medical Allowance"}),(0,s.jsxs)("span",{children:["Rs. ",(eh.allowances?.medical||0).toLocaleString()]})]}),(0,s.jsxs)("div",{className:"flex justify-between",children:[(0,s.jsx)("span",{className:"text-gray-600",children:"Transport Allowance"}),(0,s.jsxs)("span",{children:["Rs. ",(eh.allowances?.transport||0).toLocaleString()]})]})]}),(0,s.jsx)(B,{}),(0,s.jsxs)("div",{className:"flex justify-between items-center p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200",children:[(0,s.jsx)("span",{className:"font-bold",children:"Total Earnings"}),(0,s.jsxs)("span",{className:"font-bold text-xl text-green-800",children:["Rs. ",(eh.grossSalary||0).toLocaleString()]})]})]})})]}),(0,s.jsxs)(L.Card,{className:"border border-gray-200",children:[(0,s.jsx)(L.CardHeader,{className:"pb-3",children:(0,s.jsx)(L.CardTitle,{className:"text-lg",children:"Deductions"})}),(0,s.jsx)(L.CardContent,{children:(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsxs)("div",{className:"flex justify-between",children:[(0,s.jsx)("span",{className:"text-gray-600",children:"Tax Deduction"}),(0,s.jsxs)("span",{className:"text-red-600",children:["Rs. ",(eh.deductions?.tax||0).toLocaleString()]})]}),(0,s.jsxs)("div",{className:"flex justify-between",children:[(0,s.jsx)("span",{className:"text-gray-600",children:"Provident Fund"}),(0,s.jsxs)("span",{className:"text-red-600",children:["Rs. ",(eh.deductions?.providentFund||0).toLocaleString()]})]}),(0,s.jsxs)("div",{className:"flex justify-between",children:[(0,s.jsx)("span",{className:"text-gray-600",children:"Insurance"}),(0,s.jsxs)("span",{className:"text-red-600",children:["Rs. ",(eh.deductions?.insurance||0).toLocaleString()]})]})]}),(0,s.jsx)(B,{}),(0,s.jsxs)("div",{className:"flex justify-between items-center p-3 bg-gradient-to-r from-red-50 to-rose-50 rounded-lg border border-red-200",children:[(0,s.jsx)("span",{className:"font-bold",children:"Total Deductions"}),(0,s.jsxs)("span",{className:"font-bold text-xl text-red-800",children:["Rs. ",(eh.totalDeductions||0).toLocaleString()]})]})]})})]})]}),(0,s.jsx)(L.Card,{className:"border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50",children:(0,s.jsx)(L.CardContent,{className:"p-6",children:(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"text-sm text-green-700 font-medium",children:"Payment Status"}),(0,s.jsx)(R.Badge,{className:`mt-2 text-sm px-4 py-1.5 font-medium ${"paid"===eh.paymentStatus?"bg-green-100 text-green-800 border-green-300 shadow-sm":"pending"===eh.paymentStatus?"bg-yellow-100 text-yellow-800 border-yellow-300 shadow-sm":"bg-red-100 text-red-800 border-red-300 shadow-sm"}`,children:eh.paymentStatus?.toUpperCase()})]}),(0,s.jsxs)("div",{className:"text-right",children:[(0,s.jsx)("p",{className:"text-sm text-gray-600",children:"Payment Date"}),(0,s.jsx)("p",{className:"font-bold text-lg",children:eh.paymentDate?(0,X.format)(new Date(eh.paymentDate),"MMM dd, yyyy"):"Not Paid Yet"})]}),(0,s.jsxs)("div",{className:"text-right",children:[(0,s.jsx)("p",{className:"text-sm text-gray-600",children:"Bank Account"}),(0,s.jsx)("p",{className:"font-medium",children:ec.staffProfile?.bankAccount?.accountNumber?`****${ec.staffProfile.bankAccount.accountNumber.slice(-4)}`:"Not Set"})]})]})})})]}):(0,s.jsxs)("div",{className:"text-center py-12 border-2 border-dashed border-gray-200 rounded-lg",children:[(0,s.jsx)(g.DollarSign,{className:"h-12 w-12 mx-auto mb-4 text-gray-300"}),(0,s.jsxs)("p",{className:"text-gray-500 mb-2",children:["No payroll record found for ",Z[eu-1]," ",eN]}),(0,s.jsx)("p",{className:"text-sm text-gray-400 mb-4",children:"Generate payroll to view salary details"})]})})]})}),(0,s.jsx)(_.TabPanel,{value:"documents",activeTab:en,children:(0,s.jsxs)(L.Card,{className:"border border-gray-200 shadow-sm",children:[(0,s.jsxs)(L.CardHeader,{children:[(0,s.jsx)(L.CardTitle,{children:"Official Documents"}),(0,s.jsx)(L.CardDescription,{children:"Generate and print official letters and certificates"})]}),(0,s.jsx)(L.CardContent,{children:(0,s.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:ee.map(e=>{let t=e.icon;return(0,s.jsx)(L.Card,{className:"cursor-pointer hover:shadow-lg transition-all duration-200 border border-gray-200 hover:border-blue-300 hover:-translate-y-1",onClick:()=>{eP(e.id),eD(!0)},children:(0,s.jsxs)(L.CardContent,{className:"p-5 flex flex-col items-center text-center",children:[(0,s.jsx)("div",{className:`h-14 w-14 rounded-2xl ${e.color} flex items-center justify-center mb-4 shadow-md`,children:(0,s.jsx)(t,{className:"h-7 w-7 text-white"})}),(0,s.jsx)("h3",{className:"font-semibold mb-2 text-gray-900",children:e.label}),(0,s.jsx)("p",{className:"text-xs text-gray-500",children:"Click to generate and print"})]})},e.id)})})})]})})]})]})]}),(0,s.jsx)(G.default,{open:eM,onClose:()=>eI(!1),title:"Print Options",size:"lg",children:(0,s.jsxs)("div",{className:"space-y-6",children:[(0,s.jsx)("p",{className:"text-gray-600",children:"Select what you want to print:"}),(0,s.jsxs)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:[(0,s.jsxs)(z.Button,{variant:"outline",className:"h-auto py-5 flex-col gap-3 hover:bg-blue-50 hover:border-blue-300",onClick:()=>{eI(!1),e_("report")},children:[(0,s.jsx)(d.FileText,{className:"h-8 w-8 text-blue-600"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"font-semibold",children:"Monthly Report"}),(0,s.jsx)("div",{className:"text-xs text-gray-500 mt-1",children:"Complete report"})]})]}),(0,s.jsxs)(z.Button,{variant:"outline",className:"h-auto py-5 flex-col gap-3 hover:bg-purple-50 hover:border-purple-300",onClick:()=>{eI(!1),eA(!0),eT("front")},children:[(0,s.jsx)(c.IdCard,{className:"h-8 w-8 text-purple-600"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"font-semibold",children:"ID Card"}),(0,s.jsx)("div",{className:"text-xs text-gray-500 mt-1",children:"85.6mm × 54mm"})]})]}),(0,s.jsxs)(z.Button,{variant:"outline",className:"h-auto py-5 flex-col gap-3 hover:bg-green-50 hover:border-green-300",onClick:()=>{eI(!1),eh?(eP("salary-slip"),eD(!0)):V.toast.error("Please generate payroll first")},children:[(0,s.jsx)(w.CreditCard,{className:"h-8 w-8 text-green-600"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"font-semibold",children:"Salary Slip"}),(0,s.jsx)("div",{className:"text-xs text-gray-500 mt-1",children:"A4 Format"})]})]}),(0,s.jsxs)(z.Button,{variant:"outline",className:"h-auto py-5 flex-col gap-3 hover:bg-amber-50 hover:border-amber-300",onClick:()=>{eI(!1),eP("appointment"),eD(!0)},children:[(0,s.jsx)(D,{className:"h-8 w-8 text-amber-600"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"font-semibold",children:"Documents"}),(0,s.jsx)("div",{className:"text-xs text-gray-500 mt-1",children:"All letters"})]})]})]})]})}),(0,s.jsx)(G.default,{open:ek,onClose:()=>eA(!1),title:"Employee ID Card",maxWidth:"lg",children:(0,s.jsxs)("div",{className:"space-y-6",children:[(0,s.jsxs)("div",{className:"flex flex-col items-center",children:[(0,s.jsxs)("div",{className:"flex gap-2 mb-4",children:[(0,s.jsxs)(z.Button,{variant:"front"===eE?"default":"outline",size:"sm",onClick:()=>eT("front"),className:"gap-2",children:[(0,s.jsx)(T.Eye,{className:"h-4 w-4"}),"Front Side"]}),(0,s.jsxs)(z.Button,{variant:"back"===eE?"default":"outline",size:"sm",onClick:()=>eT("back"),className:"gap-2",children:[(0,s.jsx)(T.Eye,{className:"h-4 w-4"}),"Back Side"]})]}),(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("div",{className:"absolute -top-6 left-0 right-0 text-center",children:(0,s.jsxs)("div",{className:"inline-flex items-center gap-2 bg-gray-800 text-white text-xs px-3 py-1 rounded-full",children:[(0,s.jsx)(I,{className:"h-3 w-3"}),"Standard ID Card Size: 85.6mm × 54mm (Credit Card Size)"]})}),(0,s.jsx)("div",{className:"scale-100",id:"print-content",children:(0,s.jsxs)("div",{className:"id-card-container",id:"id-card-qr",children:["front"===eE&&(0,s.jsxs)("div",{className:"id-card-front bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white p-4 rounded-xl",children:[(0,s.jsxs)("div",{className:"id-header flex items-center mb-4",children:[(0,s.jsx)("div",{className:"id-logo h-12 w-12 rounded-full bg-white flex items-center justify-center mr-3",children:(0,s.jsx)("span",{className:"text-blue-600 font-bold text-lg",children:"EA"})}),(0,s.jsxs)("div",{className:"flex-1",children:[(0,s.jsx)("h1",{className:"text-lg font-bold",children:"EASE ACADEMY"}),(0,s.jsx)("p",{className:"text-xs opacity-90",children:"Staff Identity Card"})]})]}),(0,s.jsxs)("div",{className:"flex h-48",children:[(0,s.jsxs)("div",{className:"flex-1 pr-4",children:[(0,s.jsxs)("h2",{className:"text-2xl font-bold mb-2 leading-tight",children:[ec?.firstName," ",ec?.lastName]}),(0,s.jsx)("div",{className:"bg-white/20 px-3 py-1 rounded-full text-sm inline-block mb-4",children:ec?.staffProfile?.position||"Staff Member"}),(0,s.jsxs)("div",{className:"space-y-2 text-sm",children:[(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)("span",{className:"w-24 opacity-80",children:"Employee ID:"}),(0,s.jsx)("span",{className:"font-bold flex-1",children:ec?.staffProfile?.employeeId})]}),(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)("span",{className:"w-24 opacity-80",children:"Department:"}),(0,s.jsx)("span",{className:"font-bold flex-1",children:ec?.staffProfile?.departmentId?.name})]}),(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)("span",{className:"w-24 opacity-80",children:"Valid Until:"}),(0,s.jsx)("span",{className:"font-bold flex-1",children:"Dec 2025"})]}),(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)("span",{className:"w-24 opacity-80",children:"Issue Date:"}),(0,s.jsx)("span",{className:"font-bold flex-1",children:ec?.staffProfile?.joiningDate?(0,X.format)(new Date(ec.staffProfile.joiningDate),"MMM yyyy"):"N/A"})]})]})]}),(0,s.jsxs)("div",{className:"w-1/3 flex flex-col items-center justify-center border-l border-white/20 pl-4",children:[(0,s.jsx)("div",{className:"h-32 w-24 bg-white/10 rounded-lg flex items-center justify-center mb-3",children:(0,s.jsx)("div",{className:"text-4xl text-white",children:ec?.firstName?.charAt(0)})}),(0,s.jsx)("div",{className:"bg-white p-2 rounded-lg mb-2",children:(0,s.jsx)(q.QRCodeCanvas,{value:JSON.stringify({id:ec?._id,employeeId:ec?.staffProfile?.employeeId,name:`${ec?.firstName} ${ec?.lastName}`,branch:ec?.branchId?.name}),size:80,level:"H"})}),(0,s.jsx)("div",{className:"text-xs text-center font-mono bg-white/10 px-2 py-1 rounded",children:ec?.staffProfile?.employeeId})]})]}),(0,s.jsx)("div",{className:"mt-4 pt-3 border-t border-white/20 text-xs text-center opacity-80",children:"If found, please contact administration immediately."})]}),"back"===eE&&(0,s.jsxs)("div",{className:"id-card-back bg-gradient-to-br from-gray-900 to-gray-700 text-white p-4 rounded-xl",children:[(0,s.jsxs)("div",{className:"text-center mb-4",children:[(0,s.jsx)("div",{className:"h-8 w-full bg-gradient-to-r from-yellow-400 to-yellow-600 mb-4"}),(0,s.jsx)("h3",{className:"text-lg font-bold mb-2",children:"OFFICIAL STAFF ID CARD"}),(0,s.jsx)("p",{className:"text-xs opacity-80",children:"Ease Academy Management System"})]}),(0,s.jsxs)("div",{className:"space-y-3 text-sm",children:[(0,s.jsxs)("div",{className:"bg-white/10 p-3 rounded-lg",children:[(0,s.jsxs)("div",{className:"flex justify-between mb-2",children:[(0,s.jsx)("span",{className:"opacity-80",children:"Emergency Contact:"}),(0,s.jsx)("span",{className:"font-bold",children:ec?.staffProfile?.emergencyContact?.phone||"N/A"})]}),(0,s.jsx)("div",{className:"text-xs opacity-80",children:ec?.staffProfile?.emergencyContact?.name||"Not specified"})]}),(0,s.jsxs)("div",{className:"bg-white/10 p-3 rounded-lg",children:[(0,s.jsxs)("div",{className:"flex justify-between mb-2",children:[(0,s.jsx)("span",{className:"opacity-80",children:"Blood Group:"}),(0,s.jsx)("span",{className:"font-bold",children:ec?.bloodGroup||"N/A"})]}),(0,s.jsx)("div",{className:"text-xs opacity-80",children:"Medical Information"})]}),(0,s.jsxs)("div",{className:"mt-4",children:[(0,s.jsx)("div",{className:"barcode font-barcode text-4xl text-center tracking-widest",children:ec?.staffProfile?.employeeId?.replace(/[^0-9]/g,"")||"1234567890"}),(0,s.jsx)("div",{className:"text-xs text-center mt-2 opacity-80",children:"SCAN FOR VERIFICATION"})]})]}),(0,s.jsx)("div",{className:"mt-4 pt-3 border-t border-white/20 text-xs",children:(0,s.jsxs)("div",{className:"flex justify-between",children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{children:["ID: ",Math.random().toString(36).substr(2,8).toUpperCase()]}),(0,s.jsx)("div",{children:"Issued By: Ease Academy HR"})]}),(0,s.jsxs)("div",{className:"text-right",children:[(0,s.jsx)("div",{children:"Non-Transferable"}),(0,s.jsx)("div",{children:"Property of Ease Academy"})]})]})})]})]})})]}),(0,s.jsxs)("div",{className:"mt-4 flex items-center gap-2 text-sm text-gray-600",children:[(0,s.jsx)(M.QrCode,{className:"h-4 w-4"}),(0,s.jsx)("span",{children:"QR contains employee verification data"})]})]}),(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row gap-3 pt-6 border-t",children:[(0,s.jsx)(z.Button,{variant:"outline",onClick:()=>eA(!1),className:"flex-1",children:"Close"}),(0,s.jsxs)(z.Button,{onClick:()=>{let e=document.getElementById("id-card-qr")?.querySelector("canvas");if(e){let s=e.toDataURL("image/png"),t=document.createElement("a");t.download=`${ec?.firstName}-${ec?.lastName}-qr.png`,t.href=s,t.click()}},variant:"outline",className:"flex-1 gap-2",children:[(0,s.jsx)(n.Download,{className:"h-4 w-4"}),"Download QR"]}),(0,s.jsxs)(z.Button,{onClick:()=>{eA(!1),setTimeout(()=>e_("idcard"),300)},className:"flex-1 gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white",children:[(0,s.jsx)(o.Printer,{className:"h-4 w-4"}),"Print ID Card"]})]})]})}),(0,s.jsx)(G.default,{open:eC,onClose:()=>eD(!1),title:"Document Preview",maxWidth:"4xl",children:(0,s.jsxs)("div",{className:"space-y-6",children:[(0,s.jsx)("div",{className:"border rounded-lg p-4 bg-gray-50 max-h-[60vh] overflow-y-auto",children:(0,s.jsx)("div",{id:"print-content",children:(0,s.jsxs)("div",{className:"bg-white p-8 print:p-0",children:[(0,s.jsxs)("div",{className:"text-center border-b-2 border-blue-600 pb-6 mb-8 print:pb-4 print:mb-6",children:[(0,s.jsxs)("div",{className:"flex items-center justify-center gap-4 mb-4 print:mb-2",children:[(0,s.jsx)("div",{className:"h-16 w-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center print:h-12 print:w-12",children:(0,s.jsx)("span",{className:"text-white font-bold text-2xl print:text-xl",children:"EA"})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{className:"text-3xl font-bold text-blue-900 print:text-2xl",children:"EASE ACADEMY"}),(0,s.jsx)("p",{className:"text-gray-600 mt-2 print:text-sm",children:"Excellence in Education & Administration"})]})]}),(0,s.jsxs)("div",{className:"flex flex-wrap justify-center gap-4 mt-4 text-sm text-gray-500 print:text-xs print:gap-2",children:[(0,s.jsxs)("p",{className:"flex items-center gap-1",children:[(0,s.jsx)(h.Phone,{className:"h-3 w-3"}),"+92 300 1234567"]}),(0,s.jsxs)("p",{className:"flex items-center gap-1",children:[(0,s.jsx)(x.Mail,{className:"h-3 w-3"}),"info@easeacademy.edu.pk"]}),(0,s.jsxs)("p",{className:"flex items-center gap-1",children:[(0,s.jsx)(E.Globe,{className:"h-3 w-3"}),"www.easeacademy.edu.pk"]})]})]}),(0,s.jsxs)("div",{className:"text-center mb-8 print:mb-6",children:[(0,s.jsx)("h2",{className:"text-2xl font-bold uppercase tracking-wider text-gray-800 border-b pb-4 print:text-xl",children:eB(eS).subject}),(0,s.jsxs)("p",{className:"text-gray-500 mt-4 print:mt-2",children:["Date: ",(0,X.format)(new Date,"MMMM dd, yyyy")]})]}),(0,s.jsx)("div",{className:"mb-8 p-6 bg-gray-50 rounded-xl border border-gray-200 print:p-4",children:(0,s.jsxs)("div",{className:"flex items-start gap-3",children:[(0,s.jsx)(m.User,{className:"h-5 w-5 text-gray-400 mt-1 flex-shrink-0"}),(0,s.jsxs)("div",{className:"flex-1",children:[(0,s.jsx)("p",{className:"font-bold text-gray-700 mb-2",children:"TO:"}),(0,s.jsxs)("p",{className:"text-lg font-semibold text-gray-900 print:text-base",children:[ec.firstName," ",ec.lastName]}),(0,s.jsx)("p",{className:"text-gray-600",children:ec.staffProfile?.position||"Staff Member"}),(0,s.jsxs)("p",{className:"text-gray-600",children:["Employee ID: ",ec.staffProfile?.employeeId||"N/A"]}),(0,s.jsx)("p",{className:"text-gray-600",children:ec.branchId?.name||"Ease Academy"})]}),(0,s.jsx)("div",{className:"text-right",children:(0,s.jsxs)("p",{className:"text-sm text-gray-500",children:["Ref: ",Math.random().toString(36).substr(2,9).toUpperCase()]})})]})}),(0,s.jsx)("div",{className:"prose prose-lg max-w-none mb-12 print:prose-base print:mb-8",children:(e=eB(eS),(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:e.content}}))}),(0,s.jsxs)("div",{className:"mt-16 pt-8 border-t flex flex-col sm:flex-row justify-between gap-8 print:mt-12 print:pt-6",children:[(0,s.jsxs)("div",{className:"text-center flex-1",children:[(0,s.jsx)("div",{className:"h-1 w-48 bg-gray-400 mx-auto mb-2"}),(0,s.jsxs)("p",{className:"font-bold text-gray-900 mt-4",children:[ec.firstName," ",ec.lastName]}),(0,s.jsx)("p",{className:"text-sm text-gray-500",children:"Employee Signature"}),(0,s.jsx)("div",{className:"mt-2 text-xs text-gray-400",children:"Date: ________________"})]}),(0,s.jsxs)("div",{className:"text-center flex-1",children:[(0,s.jsx)("div",{className:"h-1 w-48 bg-gray-400 mx-auto mb-2"}),(0,s.jsx)("p",{className:"font-bold text-gray-900 mt-4",children:"Principal / Administrator"}),(0,s.jsx)("p",{className:"text-sm text-gray-500",children:"Authorized Signature & Stamp"}),(0,s.jsx)("div",{className:"mt-2 text-xs text-gray-400",children:"Date: ________________"})]})]}),(0,s.jsxs)("div",{className:"mt-12 text-center text-xs text-gray-400 print:mt-8",children:[(0,s.jsx)("p",{children:"This is a computer-generated document. No physical signature required."}),(0,s.jsxs)("p",{className:"mt-1",children:["Document ID: ",Math.random().toString(36).substr(2,9).toUpperCase()]}),(0,s.jsxs)("p",{className:"mt-1",children:["Generated on: ",(0,X.format)(new Date,"yyyy-MM-dd hh:mm:ss a")]})]})]})})}),(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row gap-3 pt-6 border-t",children:[(0,s.jsx)(z.Button,{variant:"outline",onClick:()=>eD(!1),className:"flex-1",children:"Close Preview"}),(0,s.jsxs)(z.Button,{onClick:()=>e_("letter"),className:"flex-1 gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white",children:[(0,s.jsx)(o.Printer,{className:"h-4 w-4"}),"Print Document"]}),(0,s.jsxs)(z.Button,{variant:"outline",className:"flex-1 gap-2",children:[(0,s.jsx)(n.Download,{className:"h-4 w-4"}),"Download PDF"]})]})]})})]})}e.s(["default",()=>es],266432)}]);