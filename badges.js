const badgesConfig = {
    "has2026": {
        "img": "2026.png",
        "title": "2026",
        "isStaffOnly": false
    },
    "isStaff": {
        "img": "admin.jpg",
        "title": "Staff",
        "isStaffOnly": true,
        "action": () => {
            document.getElementById('adminPanel').style.display = 'flex';
        }
    },
    // TON NOUVEAU BADGE FRIEND
    "isFriend": {
        "img": "Friend.jpg",
        "title": "Ami Officiel",
        "isStaffOnly": false
    }
};
