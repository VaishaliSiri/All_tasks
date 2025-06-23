(() => {
interface Course {
  image: string;
  title: string;
  subject: string;
  grade: string;
  units: number | null;
  lessons: number | null;
  topics: number | null;
  className: string;
  students: number | null;
  dateRange: string | null;
  fav: boolean;
  iconsActive: boolean[];
}

interface Announcement {
  pa: string;
  title: string;
  attachments: string;
  course: string;
  time: string;
  status: 'checked' | 'unchecked';
}

interface Alert {
  content: string;
  std: string;
  course: string;
  time: string;
  status: 'checked' | 'unchecked';
}

const courses: Course[] = [
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

const iconPaths: string[] = [
  "./quantum screen assets/icons/preview.svg",
  "./quantum screen assets/icons/manage course.svg",
  "./quantum screen assets/icons/grade submissions.svg",
  "./quantum screen assets/icons/reports.svg"
];

const container = document.getElementById("courseCards") as HTMLElement;

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

// --- Logic Functions ---

function changeImage(selected: string): void {
  const img1 = document.getElementById('myImage') as HTMLImageElement;
  const img2 = document.getElementById('myImage1') as HTMLImageElement;

  if (selected === 'district') {
    img1.src = "./quantum screen assets/icons/radio-button-on.svg";
    img2.src = "./quantum screen assets/icons/radio-button-off.svg";
  } else if (selected === 'independent') {
    img1.src = "./quantum screen assets/icons/radio-button-off.svg";
    img2.src = "./quantum screen assets/icons/radio-button-on.svg";
  }
}

function remember(): void {
  const remImage = document.getElementById('no_remember') as HTMLImageElement;
  if (remImage.src.indexOf('checkbox-checked')!=-1) {
    remImage.src = "./quantum screen assets/icons/checkbox-unchecked.svg";
  } else {
    remImage.src = "./quantum screen assets/icons/checkbox-checked.svg";
  }
}

function showPassword(): void {
  const pass = document.getElementById("showPass") as HTMLInputElement;
  pass.type = pass.type === 'password' ? 'text' : 'password';
}

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".dash > a");
  links.forEach(link => {
    link.addEventListener("click", function () {
      links.forEach(l => l.classList.remove("active"));
      this.classList.add("active");
    });
  });
  toggleSidebar();
});

const courseDiv = document.querySelector('.course') as HTMLElement;
const classesDiv = document.querySelector('.classes') as HTMLElement;

courseDiv.addEventListener('click', () => {
  courseDiv.classList.add('active');
  classesDiv.classList.remove('active');
});

classesDiv.addEventListener('click', () => {
  classesDiv.classList.add('active');
  courseDiv.classList.remove('active');
});

function toggleSidebar(): void {
  const sidebar = document.getElementById("sidebar") as HTMLElement;
  const hamburger = document.getElementById("hamburger") as HTMLElement;

  hamburger.addEventListener("mouseenter", () => {
    sidebar.style.display = "block";
    hamburger.classList.add("hamburger-active");
  });

  sidebar.addEventListener("mouseleave", () => {
    sidebar.style.display = "none";
    hamburger.classList.remove("hamburger-active");
  });
}

const announcements: Announcement[] = [
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

const alerts: Alert[] = [
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

// Render Announcements
function renderAnnouncements(): void {
  const announcementWrapper = document.querySelector('.announcement-wrapper') as HTMLElement | null;
  const announcementIcon = document.querySelectorAll('.icon-container img')[1] as HTMLImageElement | undefined;
  const announcementDropdown = document.getElementById('announcementDropdown') as HTMLElement | null;
  const announcementCard = document.getElementById('announcementCard') as HTMLElement | null;

  if (!announcementWrapper || !announcementIcon || !announcementDropdown || !announcementCard) return;

  let announcementTimeout: number;

  announcementWrapper.addEventListener('mouseenter', () => {
    clearTimeout(announcementTimeout);
    announcementDropdown.style.display = 'block';
    announcementIcon.style.filter = 'brightness(0) invert(1)';
  });

  announcementWrapper.addEventListener('mouseleave', () => {
    announcementTimeout = window.setTimeout(() => {
      announcementDropdown.style.display = 'none';
      announcementIcon.style.filter = 'none';
    }, 150);
  });

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

// Render Alerts

function renderAlerts(): void {
  const alertWrapper = document.querySelector('.alert-wrapper') as HTMLElement | null;
  const alertIcon = document.querySelectorAll('.icon-container img')[0] as HTMLImageElement | undefined;
  const alertDropdown = document.getElementById('announcementDropdown1') as HTMLElement | null;
  const alertCard = document.getElementById('announcementCard1') as HTMLElement | null;

  if (!alertWrapper || !alertIcon || !alertDropdown || !alertCard) return;

  let alertTimeout: number;

  alertWrapper.addEventListener('mouseenter', () => {
    clearTimeout(alertTimeout);
    alertDropdown.style.display = 'block';
    alertIcon.style.filter = 'brightness(0) invert(1)';
  });

  alertWrapper.addEventListener('mouseleave', () => {
    alertTimeout = window.setTimeout(() => {
      alertDropdown.style.display = 'none';
      alertIcon.style.filter = 'none';
    }, 150);
  });

  alertCard.innerHTML = '';

  alerts.forEach(item => {
    const isRead = item.status === 'checked';
    const icon = isRead
      ? './quantum screen assets/icons/read-msg.svg'
      : './quantum screen assets/icons/unread-msg.svg';

    const backgroundColor = isRead ? '#ffffff' : '#FFF7D6';

    const courseInfo = item.course
      ? `<div class="course-name" style="font-size: 13px; color: #444;">Course: ${item.course}</div>`
      : item.std
      ? `<div class="course-name" style="font-size: 13px; color: #444;">Course: ${item.std}</div>`
      : '';

    const alertItem = `
      <div class="announcement-item" style="background-color: ${backgroundColor};">
        <div class="pa-name" style="display: flex; justify-content: space-between; align-items: center;">
          <span>${item.content}</span>
          <img class="icon-status" src="${icon}" alt="status-icon" style="width: 18px; height: 18px;">
        </div>
        ${courseInfo}
        <div class="attachment-time" style="display: flex; justify-content: flex-end; color: #888; font-size: 12px; margin-top: 8px;">
          ${item.time}
        </div>
      </div>
    `;

    alertCard.innerHTML += alertItem;
  });
}


renderAnnouncements();
renderAlerts();

})();