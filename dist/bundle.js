(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var i=r.length-1;i>-1&&!e;)e=r[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.p;(()=>{const t=document.getElementById("theme-button"),e=document.getElementById("html-base");t.addEventListener("click",(()=>{"light"===e.getAttribute("data-theme")?e.setAttribute("data-theme","dark"):e.setAttribute("data-theme","light")}))})(),document.getElementById("add-project").addEventListener("click",(()=>{const t=document.querySelector(".main-article"),e=document.querySelector("#project-name").value;t.innerHTML+=`\n        <details>\n                <summary>\n                    <nav>\n                        <ul class="strong-title">\n                            <li><strong>${e}</strong></li>\n                        </ul>\n                        <ul class="sub-details">\n                            <li><input type="text" name="" id="action-input" placeholder="enter your action"></li>\n                            <li><a href="#" role="button" id="add-action">Add Action</a></li>\n                        </ul>\n                        \n                    </nav>\n                </summary>\n                <ul>\n                    <li>\n                        <nav>\n                            <ul>\n                                <li><strong></strong></li>\n                            </ul>\n                            <ul>\n                                <li>\n                                    <details role="list">\n                                        <summary aria-haspopup="listbox">Progress</summary>\n                                        <ul role="listbox">\n                                            <li><a>In progress</a></li>\n                                            <li><a>Completed</a></li>\n                                        </ul>\n                                      </details>\n                                </li>\n                                <li><a href="#" role="button">Due Date</a></li>\n                            </ul>\n                            \n                        </nav>\n                    </li>\n                   \n                </ul>\n            </details>\n        `}))})();