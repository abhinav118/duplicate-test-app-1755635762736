export const siteData = {
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john.doe@example.com",
      "phone": "+1-555-0101",
      "status": "active"
    },
    {
      "id": 2,
      "name": "John D.",
      "email": "j.doe@example.com",
      "phone": "+1-555-0101",
      "status": "duplicate"
    },
    {
      "id": 3,
      "name": "Jane Smith",
      "email": "jane.smith@example.com",
      "phone": "+1-555-0102",
      "status": "active"
    }
  ],
  "duplicates": [
    {
      "id": 1,
      "originalId": 1,
      "duplicateId": 2,
      "matchScore": 92,
      "category": "users",
      "status": "pending",
      "detectedAt": "2024-01-15T10:30:00Z"
    }
  ],
  "scanResults": [],
  "settings": {
    "autoScan": true,
    "defaultThreshold": 85,
    "emailNotifications": false,
    "slackIntegration": false,
    "matchCriteria": {
      "users": [
        "email",
        "phone"
      ],
      "products": [
        "name",
        "sku"
      ],
      "orders": [
        "email",
        "address"
      ]
    }
  }
};

export const navigation = {
  "main": [
    {
      "label": "Dashboard",
      "route": "/",
      "icon": "home"
    },
    {
      "label": "Scan",
      "route": "/scan",
      "icon": "search"
    },
    {
      "label": "Duplicates",
      "route": "/duplicates",
      "icon": "duplicate",
      "badge": "13"
    },
    {
      "label": "Settings",
      "route": "/settings",
      "icon": "cog"
    }
  ],
  "footer": [
    {
      "label": "Documentation",
      "route": "/docs",
      "external": true
    },
    {
      "label": "Support",
      "route": "/support",
      "external": true
    },
    {
      "label": "Privacy Policy",
      "route": "/privacy",
      "external": true
    }
  ]
};