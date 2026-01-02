const badgesConfig = {
    "has2026": {
        "img": "2026.png",
        "title": "Badge 2026",
        "isStaffOnly": false
    },
    "isStaff": {
        "img": "admin.jpg",
        "title": "Staff",
        "isStaffOnly": true,
        "action": () => { document.getElementById('adminPanel').style.display = 'flex'; }
    },
    "isFriend": {
        "img": "Friend.png",
        "title": "Ami Officiel",
        "isStaffOnly": false
    },
    "Donate": {
        "img": "Donateur.png",
        "title": "Donateur PayPal",
        "isStaffOnly": false
    }
};
