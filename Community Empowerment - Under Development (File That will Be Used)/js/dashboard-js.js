document.addEventListener('DOMContentLoaded', function() {
    // Navigation
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('main section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            sections.forEach(section => {
                section.classList.add('hidden');
            });
            document.getElementById(targetId).classList.remove('hidden');
        });
    });

    // Quick stats update
    updateQuickStats();

    // Recent activity feed
    updateActivityFeed();

    // Manage accounts
    const searchBar = document.querySelector('.search-bar');
    searchBar.addEventListener('input', searchAccounts);

    // Approve/Reject applications
    const approveButtons = document.querySelectorAll('.approve-btn');
    const rejectButtons = document.querySelectorAll('.reject-btn');

    approveButtons.forEach(button => {
        button.addEventListener('click', handleApprove);
    });

    rejectButtons.forEach(button => {
        button.addEventListener('click', handleReject);
    });

    // Create new account form
    const createAccountForm = document.querySelector('#create-account form');
    createAccountForm.addEventListener('submit', handleCreateAccount);

    // Generate reports
    const reportButtons = document.querySelectorAll('.report-options button');
    reportButtons.forEach(button => {
        button.addEventListener('click', generateReport);
    });
});

function updateQuickStats() {
    // Simulate fetching data from server
    setTimeout(() => {
        document.querySelector('.stat-box:nth-child(1) p').textContent = '18';
        document.querySelector('.stat-box:nth-child(2) p').textContent = '1,356';
    }, 1000);
}

function updateActivityFeed() {
    // Simulate fetching recent activity
    const activityList = document.querySelector('.activity-feed ul');
    const activities = [
        'New application received from Alex Johnson',
        'Account approved for Sarah Lee',
        'Community event updated: "Summer Orientation"',
        'New report generated: "Q2 Engagement Summary"'
    ];

    activityList.innerHTML = '';
    activities.forEach(activity => {
        const li = document.createElement('li');
        li.textContent = activity;
        activityList.appendChild(li);
    });
}

function searchAccounts() {
    const searchTerm = this.value.toLowerCase();
    const accountRows = document.querySelectorAll('#manage-accounts tbody tr');

    accountRows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(searchTerm) ? '' : 'none';
    });
}

function handleApprove() {
    const row = this.closest('tr');
    const name = row.cells[0].textContent;
    alert(`Application approved for ${name}`);
    row.remove();
    updateQuickStats();
}

function handleReject() {
    const row = this.closest('tr');
    const name = row.cells[0].textContent;
    alert(`Application rejected for ${name}`);
    row.remove();
    updateQuickStats();
}

function handleCreateAccount(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const accountData = Object.fromEntries(formData.entries());
    console.log('Creating new account:', accountData);
    alert(`Account created for ${accountData.name}`);
    this.reset();
    updateQuickStats();
}

function generateReport() {
    const reportType = this.textContent;
    alert(`Generating report: ${reportType}`);
    // In a real application, this would trigger a report generation process
    // and possibly download a file or display results in the UI
}