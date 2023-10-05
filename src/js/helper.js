/*
Copyright 2021-23 Quarkz By Mr Techtroid

All rights reserved by [Mr Techtroid]. This work is not open-source.

No part of these HTML, CSS, and JavaScript files may be reproduced, distributed, 
or transmitted in any form or by any means, including photocopying, recording, 
or other electronic or mechanical methods, without the prior written permission 
of the author, except in the case of brief quotations embodied in critical reviews 
and certain other noncommercial uses permitted by copyright law.

For permission requests, please contact [Mr Techtroid] at mrtechtroid@outlook.com .
*/

// Convert Seconds to Hours-Mins-Seconds.
// StackOverFlow - https://stackoverflow.com/a/52387803
export function sd(seconds) {
    seconds = Number(seconds);
    var d = Math.floor(seconds / (3600 * 24));
    var h = Math.floor(seconds % (3600 * 24) / 3600);
    var m = Math.floor(seconds % 3600 / 60);
    var s = Math.floor(seconds % 60);
    var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return dDisplay + hDisplay + mDisplay + sDisplay
}
// Generate a Random ID of certain length
// StakOverflow: https://stackoverflow.com/a/1349426/15107474
export function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}
// Find the sha256 hash of a Text
// StakOverflow: https://stackoverflow.com/a/48161723
export async function sha256(message) {
    const msgBuffer = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}
// Check if Two Array's are Equal
// GeeksForGeeks: https://www.geeksforgeeks.org/check-if-two-arrays-are-equal-or-not/
export function areEqual(arr1, arr2) {
    let N = arr1.length;
    let M = arr2.length;
    if (N != M)
        return false;
    arr1.sort();
    arr2.sort();
    for (let i = 0; i < N; i++)
        if (arr1[i] != arr2[i])
            return false;
    return true;
}
// Check for Mobile Devices
// StackOverflow: https://stackoverflow.com/a/11381730
export function mobileCheck() {
    let check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};
// Check if Two Objects are Equal
// StackOverflow: https://stackoverflow.com/a/32922084
export function areObjectsEqual(x, y) {
    const ok = Object.keys, tx = typeof x, ty = typeof y;
    return x && y && tx === 'object' && tx === ty ? (
        ok(x).length === ok(y).length &&
        ok(x).every(key => areObjectsEqual(x[key], y[key]))
    ) : (x === y);
}
// Get Time Of Server
export function getServerTime(url) {
    fetch(url)
        .then((response) => {
            var date;
            for (var pair of response.headers.entries()) {
                if (pair[0] === 'date') {
                    date = new Date(pair[1]).getTime()
                }
            }
            return date;
        });
}
// Make A Element Full Screen
export function fullEle(ele) {
    if (ele.requestFullscreen) {
        ele.requestFullscreen();
    } else if (ele.mozRequestFullScreen) {
        /* Firefox */
        ele.mozRequestFullScreen();
    } else if (ele.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        ele.webkitRequestFullscreen();
    } else if (ele.msRequestFullscreen) {
        /* IE/Edge */
        ele.msRequestFullscreen();
    }
}
// Merge The Contents of Two Array's
export const mergeById = (a1, a2) =>
    a1.map(itm => ({
        ...a2.find((item) => (item.qid === itm.qid) && item),
        ...itm
    }));
// Get Elements With ID in Short Form
export function dE(ele) {
    return document.getElementById(ele)
}
// Sort An Object based on a parameter.
export function sortObj(objs, param, type) {
    var sorter2;
    if (type == 0) {
        sorter2 = (sortBy) => (a, b) => a[sortBy] > b[sortBy] ? 1 : -1;
    } if (type == 1) {
        sorter2 = (sortBy) => (a, b) => a[sortBy] > b[sortBy] ? -1 : 1;
    }
    return objs.sort(sorter2(param));
}
export function sortObjv2(objs, param1, param2, type) {
    var sorter2;
    if (type == 0) {
        sorter2 = (sortBy1, sortBy2) => (a, b) => {
            if (a[sortBy1] === b[sortBy1]) {
                return a[sortBy2] > b[sortBy2] ? 1 : -1;
            }
            return a[sortBy1] > b[sortBy1] ? 1 : -1;
        };
    } else if (type == 1) {
        sorter2 = (sortBy1, sortBy2) => (a, b) => {
            if (a[sortBy1] === b[sortBy1]) {
                return a[sortBy2] > b[sortBy2] ? -1 : 1;
            }
            return a[sortBy1] > b[sortBy1] ? -1 : 1;
        };
    }
    return objs.sort(sorter2(param1, param2));
}
// Make Elements Latex Rendered
export function renderMarkedMath(eleid, toid) {
    var v = marked.parse(dE(eleid).value)
    dE(toid).innerHTML = v
    renderMathInElement(dE(toid));
}
export function qCorrector(type, answer, useranswer, p_correct, p_incorrect, p_unattempted) {
    if (useranswer == undefined || useranswer == [] || useranswer.length == 0) {
        return { type: "unattempted", points: p_unattempted }
    }
    if (type == "numerical" || type == "fill") {
        let calc = answer.some(item => useranswer.includes(item));
        if (calc) {
            return { type: "correct", marks: p_correct }
        } else {
            return { type: "incorrect", marks: p_incorrect }
        }
    }
    if (type == "mcq" || type == "mcq_multiple") {
        let calc = areEqual(answer, useranswer)
        if (calc) {
            return { type: "correct", marks: p_correct }
        } else {
            return { type: "incorrect", marks: p_incorrect }
        }
    }
    if (type == "mcq_multiple_partial") {
        if (useranswer.length > answer.length) {
            return { type: "incorrect", marks: p_incorrect }
        }
        let calc = useranswer.every(item => answer.includes(item));
        let m_crr = 0;
        if (calc) {
            switch (useranswer.length) {
                case 3: m_crr = 0.75 * p_correct; break;
                case 2: m_crr = 0.5 * p_correct; break;
                case 1: m_crr = 0.25 * p_correct; break;
            }
            return { type: "correct", marks: m_crr }
        } else {
            return { type: "incorrect", marks: p_incorrect }
        }
    }
}

export function playSoundEffect(type) {
    let audio = new Audio();
    if (type == 1) {
        audio.src = 'data:audio/mp3;base64,' + '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';
    } else if (type == 2) {
        audio.src = 'data:audio/mp3;base64,' + '//NIZAAFvAE3L6CIAAg4BeABQBAAlj9tackkSXAfLvgm+J3tUGOXB9+CEoCAIf8Hw//sf/4IO6gwH///y4Pn//y8T+XP/wQBAEDn///6gxKAg4hf//8EAQBCo5/BMH3/g4CAYRbnMzpMlkcVicRiMQAP4avle0n2eEEd2Ig+yxg/FEknHuXzckR6qdqfJdSR//NIZCwPFYFvL8e0AYbIRoxthRAAkVJrdBjho63HkYqlymg7PzA0pyaJMGyULXMLIfMPnSSTQZalWUaUPmZi30hnUtSmUipSbJl+/1GlhzP9ZkdaqtaS132ROfsZv/9RiBAACAIEABgf/GeBHf8p8479P/6v/7f/l////k0aQZHhlbthc46MySSxxAjxJBO0//NIZBMKyPVrP+a0AQmp7oSp1GgBQhAbQXY1R0frRajUlSTNS6XS638yPgvK/6ReLxeNndFL//0VJJGRkXkv/+tElR6kqPoKyIKD47v/UDQNf/BUFTv/h0EP/uiFuwNCZEzLVD///tR/8fwuZo3/////9///tQQtJAzAEwl3HABSiiAV2ylyDGWOG3ap4Cv3//NIZBEKIY19PwHnK4kx6r46UBtq+SRTmm5sDPZ5Ehv//8/QxiEwyp7/6iOJbGN+r5jD4PwfiQQnv///3YVlS3/////3QwcAYDgmejf///9BwaDRpABBYAYAsP+YVDMSwnIFgRZQ9/////8PQQGb//qPHTM4FTEHFZoDUFS2LxwPIfsk5kkX0S60yCiDXRqS//NIZBYMAY9zLzWSsQgoor2uAIpG9f6kUW/Ul9JJFHA8qZW90O0ieTD+ILGp7/6kkkkmUk///+vSM0W//////qIuCOxwutumiy0WSWiyn6kknrSSMSZIqUBHQYCC0JECE0UQAoG4UKxlA4E9rf+qR/6P////8qd///UGPi3/qN0AQgMS2iZjAPm5X9g3iavO//NIRBAHZUVfLwFnJw+LGspeAdRK//9Lf6MeSdTm+p6I6CoqLf/92OnJX///6Epb/////+gGlFK5wuskj+siDQAhAYu2N7HA3k9gCwibf//2OY39mPPBstt0ICyMMDxKKhY//9nt///f6D5S//////+GYrbNxYMM5M///9UIVQBQC7dMb2OAkIwGozCHRHhO//NIZBEImVdfLwAyIwvyhsG+A05OvS9/61Ukyq6/f3LTerdByGIEq44zAYn/+pSLqUur6f//qPHTP//////FZGxq81LRiln/rA4UFtaugACburwcQWOpUT/96Nd00q9yDP//HjALf/89ivqf///6nCT7/////8FA9QHAA7bOboOB/RUYGppNc3AOEGU63dyI//NIZBcL4Y1XL0itaQiA5spcKAbGt7dnmYTcwpTW6TAxSLQzhECKByCEFyEBHgaCEEpv/+iVHSgfYv2MkUf//XWbMaCLP6/////+sEODUggpuPYolwxd///+Tx3qAFQAG2AGwD/kZ0ZtQz/mscRTn+aQoEgEf6nf//+tP//8GgBAA9tUd6MB/7HadicCnBzW//NIRBEHbUVhLzRHbw5p5sZeAcpO2N0dOvnCBjoy/M70b/+gYV//2CKGaZ3r///caDQCz//////qIokt+f/9YAqBo2ue9HANdaZQFwS+ZX/95iCyn/6BiGa3dos8jCQBM//+MEB6D////1Eg8Bw48N//+Cv7f+XATggs2GHzROkoXc8MRUeOaf//7rr+Y6DL//NIZBcIEUU2agHnJg7qimQAA9RMqi/VkFLohQEP/6K5NjiRVkdf//9h0FBR///+v/0PHAKsKhrtS5n4XAKf7GGWKzFcFAS2Pipn/+6Gnf6zVFhVt92OICRHKHX//yx8w9bP///3EEpO6af//yJTf+glBuc4l1f9KQAqQq6yIB/9EAtHlwUAIjp6///PVovL//NIZBUH6Yk6Kyhnho4qimQKA9RI/5O4LU4if8YEzuIAKf/86ejs1HX///NPB2Yk9H/////xwozf/Z///3JDQk/sVKrmcYYUwITrt//U2rf6FDiWYzf5MflBS3/92I1ZU3///8hFQUj7ub///R//MGYIR7Pt/7grAJh9w+J34EvErYGURcb5//9JYfHL9Knj//NIZBgIgUU0KgHqJgtKgmQAA85NVkPVvuhhpEaIws3/+s8fIWd2p///qyngvCJvKmmP//+z/+cA+SP8XY//JgL/CRGbXT1aGfDzT//6L/6mC+x/6GKYfYeFjf/rfSe7f///gqEzu9/////+BoYqAAmoG212t4CIEDcEkMAbfP//7FS5Y1PpjYw3/2LkqCYX//NIZCEHzYtdLwFnNQqqhmQAAs5NX//muNz2su///+oUHXfr///v/8gSJ/849e///TI/QjASHS5Iewm26//+xrKn9HLNf/o2UGf//df////UKiQ5zJ/////0EIvn/9zwtADuQ9yIAgAn46mv//s26frc8ZHz/+sthQZ//0VGNZ0an//+jDgsJdv//+3/yp5c//NIRDMGzUUuAKicAA2ihnT/TSgAI//9AaFNKBiAf/YegFBTSYFEQl///qif92MLCFv9dqCr//0Rxwszrff///AIWf3/////xgHd9bv+LaMBQGYNR6LRsJhsLhKAAtVXWsm4F0I4JCP2BzsSRTNPtNUkUfbWdSXo/KHQIhiaJuon/n/uXkVJLUr+j+w+O12R//NIREEJ4VtLf8a0AJAp6n5dkWgASWl/2/+tv///mD//zpWAEiNtiIJhoJhQeOAVM/diZwqhah2C4qwZ7DiKZp9TM7I+jziTrQL31vUx30Uf29e3q/u/6qvr/80v8Ndv9T/xMgIAAKKKLRqB7v+Iv57+s6V/+Iuo8R///0+7///iVqrzMyxoBCYBgEk4KSrf//NIRCwDsADnL+AIAAqgkWgBxhgA57VAICMKAiYBDDwKuBkNf////////BVQdEq3FkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//NIZF8AAAGkAAAAAAAAA0gAAAAAqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq';
    }
    audio.play();
}

export function showLS(type) {
    // Get the loading spinner element
    let loadingSpinner = document.getElementById('loading-spinner');
    if (type == "s") {
        loadingSpinner.style.display = 'block';
    } else {
        loadingSpinner.style.display = 'none';
    }
}
export function antiCopyEle(id) {
    dE(id).addEventListener("mousedown", function () { return false })
    dE(id).addEventListener("selectstart", function () { return false })
    dE(id).addEventListener("cut", function () { return false })
    dE(id).addEventListener("copy", function () { return false })
    dE(id).addEventListener("paste", function () { return false })
    dE(id).addEventListener("drag", function () { return false })
    dE(id).addEventListener("drop", function () { return false })
    dE(id).classList.add("disable-text-selection")
}

export function shuffleArrayWithSeed(array, seed) {
    function random(seed) {
        var x = Math.sin(seed++) * 10000; 
        return x - Math.floor(x);
      }
    var m = array.length, t, i;
    // While there remain elements to shuffle…
    while (m) {
        // Pick a remaining element…
        i = Math.floor(random(seed) * m--);        // <-- MODIFIED LINE
        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
        ++seed                                     // <-- ADDED LINE
    }

    return array;
}

export function buildHtmlTable(arr) {
    var _table_ = document.createElement('table'),
        _tr_ = document.createElement('tr'),
        _th_ = document.createElement('th'),
        _td_ = document.createElement('td');
    _table_.classList.add("table1")
    function addAllColumnHeaders(arr, table) {
        var columnSet = [],
            tr = _tr_.cloneNode(false);
        for (var i = 0, l = arr.length; i < l; i++) {
            for (var key in arr[i]) {
                if (arr[i].hasOwnProperty(key) && columnSet.indexOf(key) === -1) {
                    columnSet.push(key);
                    var th = _th_.cloneNode(false);
                    th.appendChild(document.createTextNode(key));
                    tr.appendChild(th);
                }
            }
        }
        table.appendChild(tr);
        return columnSet;
    }
    var table = _table_.cloneNode(false),
        columns = addAllColumnHeaders(arr, table);
    for (var i = 0, maxi = arr.length; i < maxi; ++i) {
        var tr = _tr_.cloneNode(false);
        for (var j = 0, maxj = columns.length; j < maxj; ++j) {
            var td = _td_.cloneNode(false);
            var cellValue = arr[i][columns[j]];
            td.appendChild(document.createTextNode(arr[i][columns[j]] || ''));
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    return table;
}
export function studentRanker(students) {
    // Assign rank parameter to each object
    students.forEach((student, index) => {
        // Check if the previous student has the same marks
        if (index > 0 && student.marks === students[index - 1].marks) {
            // Assign the same rank as the previous student
            student.rank = students[index - 1].rank;
        } else {
            // Assign a new rank based on the current index
            student.rank = index + 1;
        }
    });
    return students
}
export function getAvatarURL(name, gen, ver) {
    function getInitials(name) {
      let initials = '';
      const words = name.split(' ');
      for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (word.length > 0) {
          initials += word[0].toUpperCase();
        }
      }
      return initials;
    }
    // Import the crypto module for hashing
    const crypto = require('crypto');
    // Hash the seed string using SHA-256 algorithm
    const hash = crypto.createHash('sha256').update(name).digest('hex');
    // Take the first 6 digits of the hash and convert to number
    const num = parseInt(hash.slice(0, 6), 16);
    // Return the 6-digit number
    if (ver == undefined || ver == "") { ver == "v2" }
    let initials = getInitials(name);
    if (ver == "v1") {
      return "https://ui-avatars.com/api/?background=random&size=100&bold=true&name=" + getInitials(userinfo.name)
    } else if (ver == "v2") {
      if (gen == "Male") {
        return "https://api.dicebear.com/5.x/avataaars/svg?top%5B%5D=dreads01,dreads02,eyepatch,frizzle,shortCurly,shortFlat,shortRound,shortWaved,sides,theCaesar,theCaesarAndSidePart,turban&seed=" + initials + num.toString()
      } else {
        return "https://api.dicebear.com/5.x/avataaars/svg?facialHairProbability=0&top%5B%5D=bigHair,bob,bun,curly,curvy,dreads,frida,fro,hijab,longButNotTooLong,miaWallace,shaggy,shaggyMullet,shavedSides,straightAndStrand,straight01,straight02&seed=" + initials + num.toString()
      }
    } else if (ver == "v3") {
      return "https://api.dicebear.com/6.x/bottts/svg?seed=" + initials + num.toString()
    }
  }
export default { sd, sha256, makeid, mobileCheck, areObjectsEqual, areEqual, getServerTime, fullEle, dE, sortObj, sortObjv2, renderMarkedMath, mergeById, qCorrector, playSoundEffect,getAvatarURL, showLS, antiCopyEle, shuffleArrayWithSeed, buildHtmlTable, studentRanker }