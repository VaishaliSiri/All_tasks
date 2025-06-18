const courses = [
  {
    image: "./quantum screen assets/images/imageMask.png",
    title: "Acceleration",
    subject: "Physics",
    grade: "Grade 7 +2",
    units: 4,
    lessons: 18,
    topics: 24,
    className: "Mr. Frank's Class B",
    students: 50,
    dateRange: "21-Jan-2020 - 21-Aug-2020",
    fav: true,
    iconsActive: [true, true, true, true]
  },
  {
    image: "./quantum screen assets/images/imageMask-1.png",
    title: "Displacement, Velocity and Speed",
    subject: "Physics 2",
    grade: "Grade 6 +3",
    units: 2,
    lessons: 15,
    topics: 20,
    className: "No Classes",
    students: null,
    dateRange: null,
    fav: true,
    iconsActive: [true, false, false, true]
  },
  {
    image: "./quantum screen assets/images/imageMask-3.png",
    title: "Introduction to Biology: Micro organisms and how they affect..",
    subject: "Mathematics",
    grade: "Grade 4 +1",
    units: 5,
    lessons: 16,
    topics: 22,
    className: "All Classes",
    students: 300,
    dateRange: null,
    fav: true,
    iconsActive: [true, false, false, true]
  },
  {
    image: "./quantum screen assets/images/imageMask-2.png",
    title: "Introduction to High School Mathematics",
    subject: "Mathematics",
    grade: "Grade 7 +2",
    units: null,
    lessons: null,
    topics: null,
    className: "Mr. Franks's Class A",
    students: 44,
    dateRange: "14-Oct-2019 - 20-Oct-2020",
    fav: false,
    iconsActive: [true, true, true, true]
  }
];

const iconPaths = [
  "./quantum screen assets/icons/preview.svg",
  "./quantum screen assets/icons/manage course.svg",
  "./quantum screen assets/icons/grade submissions.svg",
  "./quantum screen assets/icons/reports.svg"
];

const container = document.getElementById("courseCards");

courses.forEach(course => {
  const gridItem = document.createElement("div");
  gridItem.className = "grid-item";

  const iconsHTML = course.iconsActive.map((active, index) => {
    return `<img src="${iconPaths[index]}" alt="" style="opacity:${active ? 1 : 0.3}; cursor:${active ? 'pointer' : 'default'};">`;
  }).join("");

  gridItem.innerHTML = `
    <div class="dono-div">
      <div class="card-up">
        <div class="for_image">
          <img src="${course.image}" alt="">
        </div>
        <div class="for_content">
          <div class="topic">
            <p style="font-size: 16px">${course.title}</p>
            ${course.fav
              ? `<img class="fav-icon" src="./quantum screen assets/icons/favourite.svg" alt="fav icon">`
              : `<img class="fav-icon" src="./quantum screen assets/icons/favourite.svg" alt="fav icon" style="opacity:0.3;">`}
          </div>

          <div style="font-size: 12px; margin-top: 7px;" class="grade">
            <p>${course.subject}</p>
            <p style="padding: 0 9px; color: #cccccc;">|</p>
            <p>${course.grade.replace(/(\+\d+)/g, '<span class="green">$1</span>')}</p>
          </div>

          ${course.units && course.lessons && course.topics
            ? `<div style="font-size: 12px; margin-top: 7px;" class="chapter">
                  <p><b>${course.units}</b> Units</p>
                  <p><b>${course.lessons}</b> Lessons</p>
                  <p><b>${course.topics}</b> Topics</p>

               </div>`
            : ""}

          <div class="join_class">
            <div class="join_class_inner" style="opacity: ${course.className === "No Classes" ? "0.3" : "1"};">
              <p style="font-size: 16px">${course.className}</p>
              
            </div>
            <img src="./quantum screen assets/icons/arrow-down.svg" alt="">
          </div>


          ${course.students && course.dateRange
            ? `<div style="font-size: 12px; margin-top: 8px;" class="no_students">
                  <p>${course.students}</p>
                  <p>Students</p>
                  <p style="padding: 0 8px;">|</p>
                  <p>${course.dateRange}</p>
               </div>`
            : course.students
            ? `<div style="font-size: 12px; margin-top: 8px;" class="no_students">
                  <p>${course.students}</p>
                  <p>Students</p>
               </div>`
            : ""}
        </div>
      </div>

      <div class="card-down">
        <div class="ur_options">
          ${iconsHTML}
        </div>
      </div>
    </div>
  `;

  container.appendChild(gridItem);
});



function changeImage(selected) {
  const img1 = document.getElementById('myImage');
  const img2 = document.getElementById('myImage1');

  if (selected === 'district') {
    img1.src = "./quantum screen assets/icons/radio-button-on.svg";
    img2.src = "./quantum screen assets/icons/radio-button-off.svg";
  } else if (selected === 'independent') {
    img1.src = "./quantum screen assets/icons/radio-button-off.svg";
    img2.src = "./quantum screen assets/icons/radio-button-on.svg";
  }
}

function remember(){
    var rem_image = document.getElementById('no_remember'); 
    if(rem_image.src.match('checkbox-checked')){
        rem_image.src = "./quantum screen assets/icons/checkbox-unchecked.svg"
    }else{
        rem_image.src = "./quantum screen assets/icons/checkbox-checked.svg"
    }
}

function showPassword(){
    var pass = document.getElementById("showPass");
    if(pass.type === 'password'){
        pass.type = "text";
    }else{
        pass.type = "password";
    }
}

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".dash > a");

  links.forEach(link => {
    link.addEventListener("click", function () {
      links.forEach(l => l.classList.remove("active"));
      this.classList.add("active");
    });
  });
});


const courseDiv = document.querySelector('.course');
  const classesDiv = document.querySelector('.classes');

  courseDiv.addEventListener('click', () => {
    courseDiv.classList.add('active');
    classesDiv.classList.remove('active');
  });

  classesDiv.addEventListener('click', () => {
    classesDiv.classList.add('active');
    courseDiv.classList.remove('active');
  });

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const hamburger = document.querySelector(".hamburger");

  const isVisible = sidebar.style.display === "block";

  if (isVisible) {
    sidebar.style.display = "none";
    hamburger.classList.remove("hamburger-active");
    document.removeEventListener("click", handleOutsideClick);
  } else {
    sidebar.style.display = "block";
    hamburger.classList.add("hamburger-active");
    setTimeout(() => {
      document.addEventListener("click", handleOutsideClick);
    }, 0);
  }
}

function handleOutsideClick(event) {
  const sidebar = document.getElementById("sidebar");
  const hamburger = document.querySelector(".hamburger");

  if (!sidebar.contains(event.target) && !hamburger.contains(event.target)) {
    sidebar.style.display = "none";
    hamburger.classList.remove("hamburger-active");
    document.removeEventListener("click", handleOutsideClick);
  }
}




function toggleDropdown(header) {
  const dropdown = header.parentElement;
  const items = header.nextElementSibling;
  const arrowImg = header.querySelector('.arrow1 img');
  const isVisible = items.style.display === "block";

  document.querySelectorAll('.dropdown-items').forEach(item => item.style.display = "none");
  document.querySelectorAll('.arrow1 img').forEach(img => img.src = "./quantum screen assets/icons/down-arrow.svg");
  document.querySelectorAll('.dropdown').forEach(drop => drop.classList.remove('active-dropdown'));

  if (!isVisible) {
    items.style.display = "block";
    arrowImg.src = "./quantum screen assets/icons/up-arrow.svg";
    dropdown.classList.add('active-dropdown');
  }
}

window.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".grid-item");

  cards.forEach(card => {
    const dateRangeElem = card.querySelector(".no_students p:nth-child(4)");
    if (!dateRangeElem) return;

    const dateRangeText = dateRangeElem.innerText;
    const matches = dateRangeText.match(/(\d{2}-[A-Za-z]{3}-\d{4})/g);
    if (!matches || matches.length < 2) return;

    const startDate = new Date(matches[0]);
    const endDate = new Date(matches[1]);
    const today = new Date();

    // Duration in months
    const yearDiff = (endDate.getFullYear() - startDate.getFullYear()) * 12 +
                     (endDate.getMonth() - startDate.getMonth());

    // Show EXPIRED badge if > 12 months and course has ended
    if (yearDiff >= 12 && endDate < today) {
      const badge = document.createElement("div");
      badge.className = "expired-badge";
      badge.innerText = "EXPIRED";
      badge.style.cssText = `
        position: absolute;
        background-color: #FFE4E6;
        color: #D80000;
        font-size: 10px;
        font-weight: bold;
        width: 52px;
        height: 18px;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        text-align: center;
      `;
      card.style.position = "relative";
      card.appendChild(badge);
    }
  });
});


const announcements = [
  {
    pa: 'Wilson Kumar',
    title: 'No classes will be held on 21st Nov',
    attachments: '2 files are attached',
    course: '',
    time: '15-Sep-2018 at 07:21 pm',
    status: 'checked'
  },
  {
    pa: 'Samson White',
    title: 'Guest lecture on Geometry on 20th September',
    attachments: '2 files are attached',
    course: '',
    time: '15-Sep-2018 at 07:21 pm',
    status: 'unchecked'
  },
  {
    pa: 'Wilson Kumar',
    title: 'Additional course materials available on request',
    attachments: '',
    course: 'Mathematics 101',
    time: '15-Sep-2018 at 07:21 pm',
    status: 'checked'
  },
  {
    pa: 'Wilson Kumar',
    title: 'No classes will be held on 25th Dec',
    attachments: '',
    course: '',
    time: '15-Sep-2018 at 07:21 pm',
    status: 'unchecked'
  },
  {
    pa: 'Wilson Kumar',
    title: 'Additional course materials available on request',
    attachments: '',
    course: 'Mathematics 101',
    time: '15-Sep-2018 at 07:21 pm',
    status: 'unchecked'
  },
  {
    pa: 'Wilson Kumar',
    title: 'No classes will be held on 25th Dec',
    attachments: '',
    course: 'Physics 201',
    time: '15-Sep-2018 at 07:21 pm',
    status: 'checked'
  }
];




const announcementIcon = document.querySelectorAll('.icon-container img')[1]; 
const announcementDropdown = document.getElementById('announcementDropdown');
const announcementCard = document.getElementById('announcementCard');

announcementIcon.addEventListener('click', () => {
  const isOpen = announcementDropdown.style.display === 'block';
  announcementDropdown.style.display = isOpen ? 'none' : 'block';
  announcementIcon.style.filter = isOpen ? 'none' : 'brightness(0) invert(1)';
});



function renderAnnouncements() {
  announcementCard.innerHTML = '';

  announcements.forEach(item => {
    const isRead = item.status === 'checked';
    const icon = isRead
      ? './quantum screen assets/icons/read-msg.svg'
      : './quantum screen assets/icons/unread-msg.svg';

    const backgroundColor = isRead ? '#ffffff' : '#FFF7D6';

    const courseInfo = item.course
      ? `<div class="course-name" style="font-size: 13px; color: #444;">Course: ${item.course}</div>`
      : '';

    const attachmentAndTime = `
      <div class="attachment-time" style="display: flex; justify-content: space-between; align-items: center; color: #555; margin-top: 8px;">
        ${item.attachments
          ? `<div class="attachments" style="display: flex; align-items: center; gap: 4px;">
              <img src="./quantum screen assets/icons/attachment.svg" alt="attachment" style="width: 14px;">
              ${item.attachments}
            </div>`
          : `<div></div>`}
        <div class="timestamp" style="font-size: 12px; color: #888;">${item.time}</div>
      </div>
    `;

    const announcementItem = `
      <div class="announcement-item" style="background-color: ${backgroundColor};">
        <div class="pa-name" style="display: flex; justify-content: space-between; align-items: center;">
          <span>PA: ${item.pa}</span>
          <img class="icon-status" src="${icon}" alt="status-icon" style="width: 18px; height: 18px;">
        </div>
        <div class="announcement-title" style="font-weight: 600; margin: 8px 0">${item.title}</div>
        ${courseInfo}
        ${attachmentAndTime}
      </div>
    `;

    announcementCard.innerHTML += announcementItem;
  });
}
renderAnnouncements();

const alerts = [
  {
    content: 'License for Introduction to Algebra has been assigned to your school',
    std: '',
    course: '',
    time: '15-Sep-2018 at 07:21 pm',
    status: 'unchecked'
  },
  {
    content: 'Lesson 3 Practice Worksheet overdue for Amy Santiago',
    std: '',
    course: 'Advanced Mathematics',
    time: '15-Sep-2018 at 07:21 pm',
    status: 'checked'
  },
  {
    content: '23 new students created',
    std: '',
    course: '',
    time: '14-Sep-2018 at 01:21 pm',
    status: 'checked'
  },
  {
    content: '15 submissions ready for evaluation',
    std: 'Basics of Algebra',
    course: '',
    time: '15-Sep-2018 at 07:21 pm',
    status: 'unchecked'
  },
  {
    content: 'License for Basic Concepts in Geometry has been assigned to your... school',
    std: '',
    course: '',
    time: '15-Sep-2018 at 07:21 pm',
    status: 'unchecked'
  },
  {
    content: 'Lesson 3 Practice Worksheet overdue for Sam Diego',
    std: 'Advanced Mathematics',
    course: '',
    time: '15-Sep-2018 at 07:21 pm',
    status: 'checked'
  },
  {
    content: 'Lesson 3 Practice Worksheet overdue for Sam Diego',
    std: 'Advanced Mathematics',
    course: '',
    time: '15-Sep-2018 at 07:21 pm',
    status: 'checked'
  }
];

const announcementIcon1 = document.querySelectorAll('.icon-container img')[0]; 
const announcementDropdown1 = document.getElementById('announcementDropdown1');
const announcementCard1 = document.getElementById('announcementCard1');

announcementIcon1.addEventListener('click', () => {
  const isOpen = announcementDropdown1.style.display === 'block';
  announcementDropdown1.style.display = isOpen ? 'none' : 'block';
  announcementIcon1.style.filter = isOpen ? 'none' : 'brightness(0) invert(1)';
});

function renderAlerts() {
  announcementCard1.innerHTML = '';

  alerts.forEach(item1 => {
    const isRead1 = item1.status === 'checked';
    const icon1 = isRead1
      ? './quantum screen assets/icons/read-msg.svg'
      : './quantum screen assets/icons/unread-msg.svg';

    const backgroundColor1 = isRead1 ? '#ffffff' : '#FFF7D6';

    const courseInfo1 = item1.course
      ? `<div class="course-name" style="font-size: 13px; color: #444;">Course: ${item1.course}</div>`
      : item1.std
      ? `<div class="course-name" style="font-size: 13px; color: #444;">Course: ${item1.std}</div>`
      : '';

    const alertItem = `
      <div class="announcement-item" style="background-color: ${backgroundColor1};">
        <div class="pa-name" style="display: flex; justify-content: space-between; align-items: center;">
          <span>${item1.content}</span>
          <img class="icon-status" src="${icon1}" alt="status-icon" style="width: 18px; height: 18px;">
        </div>
        ${courseInfo1}
        <div class="attachment-time" style="display: flex; justify-content: flex-end; color: #888; font-size: 12px; margin-top: 8px;">
          ${item1.time}
        </div>
      </div>
    `;

    announcementCard1.innerHTML += alertItem;
  });
}



renderAlerts();
