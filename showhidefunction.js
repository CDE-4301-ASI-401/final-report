
// function showSection(sectionId) {
//     // Hide all .section elements
//     document.querySelectorAll('.section').forEach((section) => {
//         section.style.display = 'none';
//     });

//     // Ensure main-content is visible
//     const mainContent = document.getElementById('main-content');
//     if (mainContent) {
//         mainContent.style.display = 'block';
//     }

//     // Show the clicked section
//     const section = document.getElementById(sectionId);
//     if (section) {
//         section.style.display = 'block';
//         section.scrollIntoView({ behavior: 'instant' }); // Optional
//     }

//     // Highlight the active link
//     document.querySelectorAll('.sidenav a').forEach((link) => {
//         link.classList.remove('active');
//     });

//     const activeLink = document.querySelector(`.sidenav a[onclick="showSection('${sectionId}')"]`);
//     if (activeLink) {
//         activeLink.classList.add('active');
//     }
// }
// function showSubSection(parentSectionId, subSectionId) {
//     // Hide all top-level sections
//     document.querySelectorAll('.section').forEach((section) => {
//         section.style.display = 'none';
//     });

//     // Show parent section and main content wrapper
//     const mainContent = document.getElementById('main-content');
//     if (mainContent) mainContent.style.display = 'block';

//     const parent = document.getElementById(parentSectionId);
//     if (parent) parent.style.display = 'block';

//     // Scroll to the subsection
//     const target = document.getElementById(subSectionId);
//     if (target) {
//         setTimeout(() => {
//             target.scrollIntoView({ behavior: 'smooth' });
//         }, 50);
//     }

//     // Highlight the active link
//     document.querySelectorAll('.sidenav a').forEach((link) => {
//         link.classList.remove('active');
//     });

//     const activeLink = document.querySelector(`.sidenav a[onclick*="${subSectionId}"]`);
//     if (activeLink) {
//         activeLink.classList.add('active');
//     }
// }


function showSection(sectionId) {
    // Hide all .section elements
    document.querySelectorAll('.section').forEach((section) => {
        section.style.display = 'none';
    });

    // Ensure main-content is visible
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
        mainContent.style.display = 'block';
    }

    // Show the clicked section
    const section = document.getElementById(sectionId);
    if (section) {
        section.style.display = 'block';
        section.scrollIntoView({ behavior: 'instant' }); // Optional
    }

    // Highlight the active link
    document.querySelectorAll('.sidenav a').forEach((link) => {
        link.classList.remove('active');
    });

    const activeLink = document.querySelector(`.sidenav a[onclick="showSection('${sectionId}')"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}
function showSubSection(parentSectionId, subSectionId) {
    // Hide all top-level sections
    document.querySelectorAll('.section').forEach((section) => {
        section.style.display = 'none';
    });

    // Ensure main content wrapper is visible
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
        mainContent.style.display = 'block';
    }

    // Show the parent section of the subsection
    const parent = document.getElementById(parentSectionId);
    if (parent) {
        parent.style.display = 'block';

        // Then scroll to the subsection inside it
        const target = document.getElementById(subSectionId);
        if (target) {
            setTimeout(() => {
                target.scrollIntoView({ behavior: 'smooth' });
            }, 50);
        }
    }

    // Highlight the active link
    document.querySelectorAll('.sidenav a').forEach((link) => {
        link.classList.remove('active');
    });

    const activeLink = document.querySelector(`.sidenav a[onclick*="${subSectionId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}
