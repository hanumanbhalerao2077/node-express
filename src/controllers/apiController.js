const apiController = {
  health: (req, res) => {
    res.status(200).json({
      status: 'ok',
      timestamp: new Date().toISOString(),
      service: 'devops-portfolio-web',
    });
  },

  about: (req, res) => {
    res.status(200).json({
      name: 'Hanuman Bhalerao',
      role: 'DevOps Intern',
      education: 'BE-IT (3rd Year)',
      focus: ['CI/CD', 'Infrastructure as Code', 'Containers', 'Observability'],
      summary:
        'I build CI/CD pipelines, containerized services, and infrastructure-as-code patterns. This portfolio highlights my learning journey and project outcomes as a DevOps intern.',
    });
  },

  profile: (req, res) => {
    res.status(200).json({
      profile: {
        name: 'Hanuman Bhalerao',
        role: 'DevOps Intern',
        education: 'BE-IT (3rd Year)',
        location: 'India',
        summary:
          'DevOps intern focused on shipping reliable software through automated pipelines, secure containers, infrastructure-as-code, and observability-first operations.',
        skills: [
          'Linux',
          'Docker',
          'Kubernetes',
          'CI/CD',
          'Jenkins',
          'GitHub Actions',
          'Terraform',
          'AWS',
          'Monitoring & Logging',
          'Nginx',
        ],
        certifications: [
          {
            title: 'AWS Cloud Practitioner (Learning Path)',
            issuer: 'Amazon Web Services',
            year: '2025',
            status: 'In progress',
            credentialUrl: '',
          },
          {
            title: 'Docker & Containers Essentials',
            issuer: 'Coursera (Project-based learning)',
            year: '2025',
            status: 'Completed (practice projects)',
            credentialUrl: '',
          },
          {
            title: 'Kubernetes for Developers (Lab-based)',
            issuer: 'Kubernetes ecosystem learning',
            year: '2025',
            status: 'In progress',
            credentialUrl: '',
          },
        ],
        devOpsTools: [
          'Docker',
          'Kubernetes',
          'Jenkins',
          'GitHub Actions',
          'Terraform',
          'AWS',
          'Linux',
          'CI/CD',
          'Monitoring',
          'Nginx',
        ],
        projects: [
          {
            title: 'Dockerized Web App (Secure Container Baseline)',
            description:
              'Hardened Express app with helmet/compression, production multi-stage style layout, health endpoint, and optimized Docker image builds.',
            techStack: ['Node.js', 'Express', 'EJS', 'Docker', 'Nginx'],
            githubUrl: 'https://github.com/your-username/dockerized-web-app',
            liveUrl: 'https://your-live-demo.example',
          },
          {
            title: 'Kubernetes Deployment Lab (Rollouts & Probes)',
            description:
              'Hands-on manifests for deployments/services/ingress plus liveness/readiness probe patterns and rollout strategies.',
            techStack: ['Kubernetes', 'Helm (optional)', 'Ingress', 'Docker'],
            githubUrl: 'https://github.com/your-username/k8s-deployment-lab',
            liveUrl: 'https://your-live-demo.example',
          },
          {
            title: 'CI/CD Pipeline Starter (Jenkins + GitHub Actions)',
            description:
              'Reusable pipeline templates for build-test-artifact steps. Includes linting, unit tests, and environment deployment workflow.',
            techStack: ['Jenkins', 'GitHub Actions', 'Node.js', 'Docker'],
            githubUrl: 'https://github.com/your-username/cicd-pipeline-starter',
            liveUrl: 'https://your-live-demo.example',
          },
          {
            title: 'Terraform Infrastructure Blueprint (IaC Patterns)',
            description:
              'Terraform modules with variables, outputs, and environment separation. Includes basic networking and compute patterns.',
            techStack: ['Terraform', 'AWS', 'VPC', 'IAM'],
            githubUrl: 'https://github.com/your-username/terraform-blueprint',
            liveUrl: 'https://your-live-demo.example',
          },
          {
            title: 'Observability Starter (Logging + Dashboards)',
            description:
              'Structured logging guidance, basic metrics mindset, and dashboard-oriented deployment checks for services.',
            techStack: ['Monitoring', 'Logging', 'Prometheus/Grafana concepts'],
            githubUrl: 'https://github.com/your-username/observability-starter',
            liveUrl: 'https://your-live-demo.example',
          },
          {
            title: 'Nginx Reverse Proxy Setup (TLS-ready)',
            description:
              'Reverse proxy configuration patterns with caching headers, gzip, and routing strategies for containerized apps.',
            techStack: ['Nginx', 'Docker', 'Linux'],
            githubUrl: 'https://github.com/your-username/nginx-reverse-proxy',
            liveUrl: 'https://your-live-demo.example',
          },
        ],
        learningJourney: [
          {
            title: 'Week 1–2: Linux + Networking Basics',
            details:
              'File permissions, process management, networking concepts, and hands-on troubleshooting.',
            status: 'Completed',
          },
          {
            title: 'Week 3–4: Docker Foundations',
            details:
              'Image building, layers, volumes, multi-container setup, and container security basics.',
            status: 'Completed',
          },
          {
            title: 'Week 5–6: CI/CD Pipelines',
            details:
              'Automated build-test workflows using Jenkins and GitHub Actions patterns.',
            status: 'In progress',
          },
          {
            title: 'Week 7–8: Kubernetes Deployments',
            details:
              'Deployments, services, ingress, probes, rollout strategy, and service discovery.',
            status: 'In progress',
          },
          {
            title: 'Week 9–10: Terraform + IaC',
            details:
              'Module structure, variables/outputs, environment separation, and repeatable provisioning.',
            status: 'Planned',
          },
          {
            title: 'Ongoing: Observability + Reliability',
            details:
              'Health checks, logging practices, alert mindset, and performance awareness.',
            status: 'Ongoing',
          },
        ],
        githubStats: {
          user: 'hanumanbhalerao2077',
          summaryWidget:
            'https://github-readme-stats.vercel.app/api?username=hanumanbhalerao2077&show_icons=true&theme=midnight-purple&hide_border=true&count_private=true',
          streakWidget:
            'https://github-readme-streak-stats.herokuapp.com/?user=hanumanbhalerao2077&theme=midnight-purple&hide_border=true',

          contributionWidget:
            'https://github-readme-activity-graph.vercel.app/graph?username=hanumanbhalerao2077&theme=github-dark&hide_border=true',
        },
        contact: {
          email: 'bhaleraohanuman4@gmail.com',
          github: 'https://github.com/hanumanbhalerao2077',
          linkedin: 'https://www.linkedin.com/in/hanuman-bhalerao-420ba9233/',
        },
      },
    });
  },
};

module.exports = apiController;


