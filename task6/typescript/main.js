(function () {
    var courses = [
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
    var iconPaths = [
        "./quantum screen assets/icons/preview.svg",
        "./quantum screen assets/icons/manage course.svg",
        "./quantum screen assets/icons/grade submissions.svg",
        "./quantum screen assets/icons/reports.svg"
    ];
    var container = document.getElementById("courseCards");
    courses.forEach(function (course) {
        var gridItem = document.createElement("div");
        gridItem.className = "grid-item";
        var iconsHTML = course.iconsActive.map(function (active, index) {
            return "<img src=\"".concat(iconPaths[index], "\" alt=\"\" style=\"opacity:").concat(active ? 1 : 0.3, "; cursor:").concat(active ? 'pointer' : 'default', ";\">");
        }).join("");
        gridItem.innerHTML = "\n    <div class=\"dono-div\">\n      <div class=\"card-up\">\n        <div class=\"for_image\">\n          <img src=\"".concat(course.image, "\" alt=\"\">\n        </div>\n        <div class=\"for_content\">\n          <div class=\"topic\">\n            <p style=\"font-size: 16px\">").concat(course.title, "</p>\n            ").concat(course.fav
            ? "<img class=\"fav-icon\" src=\"./quantum screen assets/icons/favourite.svg\" alt=\"fav icon\">"
            : "<img class=\"fav-icon\" src=\"./quantum screen assets/icons/favourite.svg\" alt=\"fav icon\" style=\"opacity:0.3;\">", "\n          </div>\n\n          <div style=\"font-size: 12px; margin-top: 7px;\" class=\"grade\">\n            <p>").concat(course.subject, "</p>\n            <p style=\"padding: 0 9px; color: #cccccc;\">|</p>\n            <p>").concat(course.grade.replace(/(\+\d+)/g, '<span class="green">$1</span>'), "</p>\n          </div>\n\n          ").concat(course.units && course.lessons && course.topics
            ? "<div style=\"font-size: 12px; margin-top: 7px;\" class=\"chapter\">\n                  <p><b>".concat(course.units, "</b> Units</p>\n                  <p><b>").concat(course.lessons, "</b> Lessons</p>\n                  <p><b>").concat(course.topics, "</b> Topics</p>\n               </div>")
            : "", "\n\n          <div class=\"join_class\">\n            <div class=\"join_class_inner\" style=\"opacity: ").concat(course.className === "No Classes" ? "0.3" : "1", ";\">\n              <p style=\"font-size: 16px\">").concat(course.className, "</p>\n            </div>\n            <img src=\"./quantum screen assets/icons/arrow-down.svg\" alt=\"\">\n          </div>\n\n          ").concat(course.students && course.dateRange
            ? "<div style=\"font-size: 12px; margin-top: 8px;\" class=\"no_students\">\n                  <p>".concat(course.students, "</p>\n                  <p>Students</p>\n                  <p style=\"padding: 0 8px;\">|</p>\n                  <p>").concat(course.dateRange, "</p>\n               </div>")
            : course.students
                ? "<div style=\"font-size: 12px; margin-top: 8px;\" class=\"no_students\">\n                  <p>".concat(course.students, "</p>\n                  <p>Students</p>\n               </div>")
                : "", "\n        </div>\n      </div>\n\n      <div class=\"card-down\">\n        <div class=\"ur_options\">\n          ").concat(iconsHTML, "\n        </div>\n      </div>\n    </div>\n  ");
        container.appendChild(gridItem);
    });
    // --- Logic Functions ---
    function changeImage(selected) {
        var img1 = document.getElementById('myImage');
        var img2 = document.getElementById('myImage1');
        if (selected === 'district') {
            img1.src = "./quantum screen assets/icons/radio-button-on.svg";
            img2.src = "./quantum screen assets/icons/radio-button-off.svg";
        }
        else if (selected === 'independent') {
            img1.src = "./quantum screen assets/icons/radio-button-off.svg";
            img2.src = "./quantum screen assets/icons/radio-button-on.svg";
        }
    }
    function remember() {
        var remImage = document.getElementById('no_remember');
        if (remImage.src.indexOf('checkbox-checked') != -1) {
            remImage.src = "./quantum screen assets/icons/checkbox-unchecked.svg";
        }
        else {
            remImage.src = "./quantum screen assets/icons/checkbox-checked.svg";
        }
    }
    function showPassword() {
        var pass = document.getElementById("showPass");
        pass.type = pass.type === 'password' ? 'text' : 'password';
    }
    document.addEventListener("DOMContentLoaded", function () {
        var links = document.querySelectorAll(".dash > a");
        links.forEach(function (link) {
            link.addEventListener("click", function () {
                links.forEach(function (l) { return l.classList.remove("active"); });
                this.classList.add("active");
            });
        });
        toggleSidebar();
    });
    var courseDiv = document.querySelector('.course');
    var classesDiv = document.querySelector('.classes');
    courseDiv.addEventListener('click', function () {
        courseDiv.classList.add('active');
        classesDiv.classList.remove('active');
    });
    classesDiv.addEventListener('click', function () {
        classesDiv.classList.add('active');
        courseDiv.classList.remove('active');
    });
    function toggleSidebar() {
        var sidebar = document.getElementById("sidebar");
        var hamburger = document.getElementById("hamburger");
        hamburger.addEventListener("mouseenter", function () {
            sidebar.style.display = "block";
            hamburger.classList.add("hamburger-active");
        });
        sidebar.addEventListener("mouseleave", function () {
            sidebar.style.display = "none";
            hamburger.classList.remove("hamburger-active");
        });
    }
    var announcements = [
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
    var alerts = [
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
    function renderAnnouncements() {
        var announcementWrapper = document.querySelector('.announcement-wrapper');
        var announcementIcon = document.querySelectorAll('.icon-container img')[1];
        var announcementDropdown = document.getElementById('announcementDropdown');
        var announcementCard = document.getElementById('announcementCard');
        if (!announcementWrapper || !announcementIcon || !announcementDropdown || !announcementCard)
            return;
        var announcementTimeout;
        announcementWrapper.addEventListener('mouseenter', function () {
            clearTimeout(announcementTimeout);
            announcementDropdown.style.display = 'block';
            announcementIcon.style.filter = 'brightness(0) invert(1)';
        });
        announcementWrapper.addEventListener('mouseleave', function () {
            announcementTimeout = window.setTimeout(function () {
                announcementDropdown.style.display = 'none';
                announcementIcon.style.filter = 'none';
            }, 150);
        });
        announcementCard.innerHTML = '';
        announcements.forEach(function (item) {
            var isRead = item.status === 'checked';
            var icon = isRead
                ? './quantum screen assets/icons/read-msg.svg'
                : './quantum screen assets/icons/unread-msg.svg';
            var backgroundColor = isRead ? '#ffffff' : '#FFF7D6';
            var courseInfo = item.course
                ? "<div class=\"course-name\" style=\"font-size: 13px; color: #444;\">Course: ".concat(item.course, "</div>")
                : '';
            var attachmentAndTime = "\n      <div class=\"attachment-time\" style=\"display: flex; justify-content: space-between; align-items: center; color: #555; margin-top: 8px;\">\n        ".concat(item.attachments
                ? "<div class=\"attachments\" style=\"display: flex; align-items: center; gap: 4px;\">\n              <img src=\"./quantum screen assets/icons/attachment.svg\" alt=\"attachment\" style=\"width: 14px;\">\n              ".concat(item.attachments, "\n            </div>")
                : "<div></div>", "\n        <div class=\"timestamp\" style=\"font-size: 12px; color: #888;\">").concat(item.time, "</div>\n      </div>\n    ");
            var announcementItem = "\n      <div class=\"announcement-item\" style=\"background-color: ".concat(backgroundColor, ";\">\n        <div class=\"pa-name\" style=\"display: flex; justify-content: space-between; align-items: center;\">\n          <span>PA: ").concat(item.pa, "</span>\n          <img class=\"icon-status\" src=\"").concat(icon, "\" alt=\"status-icon\" style=\"width: 18px; height: 18px;\">\n        </div>\n        <div class=\"announcement-title\" style=\"font-weight: 600; margin: 8px 0\">").concat(item.title, "</div>\n        ").concat(courseInfo, "\n        ").concat(attachmentAndTime, "\n      </div>\n    ");
            announcementCard.innerHTML += announcementItem;
        });
    }
    // Render Alerts
    function renderAlerts() {
        var alertWrapper = document.querySelector('.alert-wrapper');
        var alertIcon = document.querySelectorAll('.icon-container img')[0];
        var alertDropdown = document.getElementById('announcementDropdown1');
        var alertCard = document.getElementById('announcementCard1');
        if (!alertWrapper || !alertIcon || !alertDropdown || !alertCard)
            return;
        var alertTimeout;
        alertWrapper.addEventListener('mouseenter', function () {
            clearTimeout(alertTimeout);
            alertDropdown.style.display = 'block';
            alertIcon.style.filter = 'brightness(0) invert(1)';
        });
        alertWrapper.addEventListener('mouseleave', function () {
            alertTimeout = window.setTimeout(function () {
                alertDropdown.style.display = 'none';
                alertIcon.style.filter = 'none';
            }, 150);
        });
        alertCard.innerHTML = '';
        alerts.forEach(function (item) {
            var isRead = item.status === 'checked';
            var icon = isRead
                ? './quantum screen assets/icons/read-msg.svg'
                : './quantum screen assets/icons/unread-msg.svg';
            var backgroundColor = isRead ? '#ffffff' : '#FFF7D6';
            var courseInfo = item.course
                ? "<div class=\"course-name\" style=\"font-size: 13px; color: #444;\">Course: ".concat(item.course, "</div>")
                : item.std
                    ? "<div class=\"course-name\" style=\"font-size: 13px; color: #444;\">Course: ".concat(item.std, "</div>")
                    : '';
            var alertItem = "\n      <div class=\"announcement-item\" style=\"background-color: ".concat(backgroundColor, ";\">\n        <div class=\"pa-name\" style=\"display: flex; justify-content: space-between; align-items: center;\">\n          <span>").concat(item.content, "</span>\n          <img class=\"icon-status\" src=\"").concat(icon, "\" alt=\"status-icon\" style=\"width: 18px; height: 18px;\">\n        </div>\n        ").concat(courseInfo, "\n        <div class=\"attachment-time\" style=\"display: flex; justify-content: flex-end; color: #888; font-size: 12px; margin-top: 8px;\">\n          ").concat(item.time, "\n        </div>\n      </div>\n    ");
            alertCard.innerHTML += alertItem;
        });
    }
    renderAnnouncements();
    renderAlerts();
})();
