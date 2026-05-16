const pageController = {
  landing: (req, res) => {
    res.render('index', {
      title: 'DevOps Intern Portfolio Dashboard',
    });
  },

  about: (req, res) => {
    res.render('about', {
      title: 'About - DevOps Intern Portfolio Dashboard',
    });
  },

  projects: (req, res) => {
    res.render('projects', {
      title: 'Projects - DevOps Intern Portfolio Dashboard',
    });
  },

  contact: (req, res) => {
    res.render('contact', {
      title: 'Contact - DevOps Intern Portfolio Dashboard',
    });
  },

  contactPost: (req, res) => {
    const body = req.body || {};
    const rawName = typeof body.name === 'string' ? body.name : '';
    const rawEmail = typeof body.email === 'string' ? body.email : '';
    const rawTopic = typeof body.topic === 'string' ? body.topic : '';
    const rawMessage = typeof body.message === 'string' ? body.message : '';

    const name = rawName.trim();
    const email = rawEmail.trim();
    const topic = rawTopic.trim();
    const message = rawMessage.trim();

    const allowedTopics = [
      'Internship Opportunity',
      'DevOps Project Collaboration',
      'Speaking / Mentoring',
    ];

    const errors = {};

    if (!name) errors.name = 'Full name is required.';
    if (name && name.length > 80) errors.name = 'Full name must be 80 characters or less.';

    if (!email) errors.email = 'Email is required.';
    if (email) {
      // Reasonable RFC5322-ish check without adding dependencies
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!emailOk) errors.email = 'Please enter a valid email address.';
    }

    if (!topic) errors.topic = 'Topic is required.';
    if (topic && !allowedTopics.includes(topic)) {
      errors.topic = 'Invalid topic selection.';
    }

    if (!message) errors.message = 'Message is required.';
    if (message && message.length < 10) errors.message = 'Message must be at least 10 characters.';
    if (message && message.length > 2000) errors.message = 'Message must be 2000 characters or less.';

    if (Object.keys(errors).length > 0) {
      return res.status(400).render('contact', {
        title: 'Contact - DevOps Intern Portfolio Dashboard',
        formSubmitted: false,
        formErrors: errors,
        formValues: { name, email, topic, message },
      });
    }

    // Scaffold: no persistence (replace with DB/email later)
    // Note: EJS `<%= ... %>` escapes output; do not switch to `<%- ... %>`.
    return res.status(200).render('contact', {
      title: 'Contact - DevOps Intern Portfolio Dashboard',
      formSubmitted: true,
      submitted: {
        name: name.slice(0, 80),
        email: email.slice(0, 120),
        topic,
      },
    });
  },

};

module.exports = pageController;



