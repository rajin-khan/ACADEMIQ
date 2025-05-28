![logo](./Documentation/AcademIQlogo.png)

<div align="center">

![Status](https://img.shields.io/badge/status-In_Progress-orange)
![Tech](https://img.shields.io/badge/stack-React_+_FastAPI_+_K8s-blueviolet)

> **Modernizing Legacy Student Systems**  
> A cloud-native, AI-enhanced platform for scalable academic infrastructure, starting with North South University.

---

## Overview
**AcademIQ** is a framework to help universities modernize and scale their legacy student systems without massive investments. This project proposes a replicable solution focused on cost-effective scalability, AI-assisted academic guidance, and information accessibility.

Refer to [The Idea Document](./Documentation/Idea.md) for a detailed overview and the [Implementation Plan](./Documentation/Plan.md).

---

## 🔍 Key Highlights
- **Scalable Cloud Infrastructure** – Kubernetes-based autoscaling during peak demand
- **AI-Driven Recommendations** – Academic course planning based on successful student data
- **Conversational Info Assistant** – RAG-based chatbot integrated with university resources
- **Cost-Optimized Design** – Hybrid model utilizing spot instances and cloud credits

---

## Problems Addressed
1. **Scalability Crisis**: Infrastructure fails under high student load.
2. **No Academic Guidance**: Poor course selection affects CGPA and graduation timelines.
3. **Hard-to-Find Info**: Students struggle to find official university documents and answers.

---

## System Architecture

</div>

```
React (Frontend) ↔ FastAPI (Backend) ↔ PostgreSQL / Redis
                        ↘            ↙
                   AI Services (Groq API, ChromaDB)
                        |
               Kubernetes / Docker / CI/CD
```

<div align="center">

---

## Tech Stack

| Layer         | Technology                       |
|---------------|-----------------------------------|
| Frontend      | React.js + TypeScript, Tailwind  |
| Backend       | FastAPI (Python)                 |
| Database      | PostgreSQL, Redis                |
| AI/ML         | Scikit-learn, LangChain, Groq API|
| DevOps        | Docker, Kubernetes, GitHub Actions|
| Vector Store  | ChromaDB                         |

---

## Modules
### Phase 1 – Core RDS Clone
- Authentication
- Course + Section Management
- Enrollment Logic
- Transcript & GPA Tracking

### Phase 2 – Cloud Infrastructure
- Dockerization
- Kubernetes HPA
- Monitoring: Prometheus + Grafana

### Phase 3 – AI Enhancements
- Personalized Course Recommender
- University Info Chatbot (RAG)

---

## Timeline (18 Months)

| Phase         | Duration     | Description                  |
|---------------|--------------|------------------------------|
| Phase 0       | Month 1–2    | Learning + Planning          |
| Phase 1       | Month 3–8    | Core System Build            |
| Phase 2       | Month 9–11   | Scaling Infrastructure       |
| Phase 3       | Month 12–15  | AI System Integration        |
| Finalization  | Month 16–18  | Testing, Docs, Research      |

---

## Success Metrics

- 80%+ course recommendation accuracy
- sub-2s peak response time
- 90%+ chatbot query resolution rate

---

## Budget Estimate

| Phase         | Cost Estimate       |
|---------------|---------------------|
| Development   | $500–$800           |
| AI Testing    | $200–$400           |
| Cloud Scaling | $800–$1300          |
| **Total**     | **$1500–$2500**     |

> Utilizes free tiers, academic credits, and spot/preemptible instances for cost efficiency.

---

## Research & Publication
Target conferences and journals:
- IEEE EdTech & ICT in Education
- AI + Cloud in Higher Education
- Case Studies on Scalable Academic Infra

---

## The Team

| Name                  | Institution             | ID         | GitHub                                                                                      | Followers                                                   |
|-----------------------|-------------------------|------------|---------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| **Rajin Khan**        | North South University  | 2212708042 | [![GitHub](https://img.shields.io/badge/-rajin--khan-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/rajin-khan)         | ![Followers](https://img.shields.io/github/followers/rajin-khan?label=Follow&style=social) |
| **Samiyeel Alim Binaaf** | North South University | 2212779042 | [![GitHub](https://img.shields.io/badge/-Pronaaf2k-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Pronaaf2k) | ![Followers](https://img.shields.io/github/followers/Pronaaf2k?label=Follow&style=social) |

---

## Supervised By

| Faculty                  | Institution             | Role         | GitHub                                                                                      | Followers                                                   |
|--------------------------|-------------------------|--------------|---------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| **Muhammad Shafayat Oshman** | North South University | Lecturer     | [![GitHub](https://img.shields.io/badge/-Shafayat19-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Shafayat19) | - |

---
