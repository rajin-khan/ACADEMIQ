![logo](./Documentation/AcademIQlogo.png)

<div align="center">

![Status](https://img.shields.io/badge/status-In_Progress-orange)
![Tech](https://img.shields.io/badge/stack-React_+_FastAPI_+_K8s-blueviolet)

> **Modernizing Legacy Student Systems**  
> A cloud-native, AI-enhanced platform for scalable academic infrastructure, starting with North South University.

---

## Overview
**AcademIQ** is a comprehensive, scalable, and intelligent alternative to traditional student management systems (SMS). Designed to modernize NSU's existing RDS platform, AcademIQ offers a performance-driven, cloud-native system enhanced with AI-based course recommendations and an intelligent university information assistant.

---

## Key Highlights

- **Scalable Cloud Infrastructure**: Auto-scalable Kubernetes deployments for peak advising loads
- **AI-Driven Course Recommendations**: Personalized academic paths from historical data
- **Conversational Information Assistant**: RAG-based Q&A system integrated into the student portal
- **Cost-Efficient Architecture**: Hybrid design leveraging academic cloud credits and spot instances

---

## The Problem We Solve

1. **Scalability Crisis:** NSU's legacy system fails under high user loads during advising.
2. **Lack of Smart Academic Guidance:** Students face CGPA loss and delayed graduation due to poor course planning.
3. **Information Inaccessibility:** Students struggle to locate fragmented university policies and FAQs.

---

## 🔧 Project Architecture

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

## 🛠️ Tech Stack

| Layer         | Technology                       |
|---------------|-----------------------------------|
| Frontend      | React.js + TypeScript, Tailwind  |
| Backend       | FastAPI (Python)                 |
| Database      | PostgreSQL, Redis (caching)      |
| AI/ML         | Scikit-learn, LangChain, Groq API|
| DevOps        | Docker, Kubernetes, GitHub Actions|
| Vector Store  | ChromaDB                         |

---

## Modules

### Phase 1: Core System (RDS Clone)
- Authentication + Role-based Access
- Course Catalog + Section Management
- Enrollment + Conflict Detection
- Transcript + GPA Tracker

### Phase 2: Scalable Infrastructure
- Dockerized stack
- Kubernetes with HPA
- Monitoring with Prometheus + Grafana

### Phase 3: AI Enhancements
- Academic Path Recommender (Collaborative Filtering)
- University Q&A Bot (RAG + Groq)

---

## Timeline (18 Months)

| Phase              | Duration     | Focus Area                  |
|-------------------|--------------|-----------------------------|
| Phase 0            | Month 1-2    | Learning + Planning         |
| Phase 1            | Month 3-8    | RDS Clone                   |
| Phase 2            | Month 9-11   | Cloud Infra + Scaling       |
| Phase 3            | Month 12-15  | AI Features (Rec + Q&A)     |
| Finalization       | Month 16-18  | Testing, Docs, Presentation |

---

## Success Metrics

- 80%+ course recommendation accuracy
- 2s response time under full load
- 25% improvement in academic outcomes (projected)
- 90%+ Q&A query success rate

---

## Budget Estimate

| Phase         | Cost Estimate       |
|---------------|---------------------|
| Development   | $500 - $800         |
| AI Testing    | $200 - $400         |
| Cloud Scaling | $800 - $1300        |
| **Total**     | **$1500 - $2500**   |

> Built with cost-optimization in mind: spot instances, free tiers, academic credits.

---

## Research & Publication

Targeted for:
- IEEE EdTech Conferences
- Journals in Cloud Computing and AI in Education
- Case study for budget-constrained university transformation

---


## The Team:  

| Name                  | Institution             | ID         | GitHub                                                                                      | Followers                                                   |
|-----------------------|-------------------------|------------|---------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| **Rajin Khan**        | North South University  | 2212708042 | [![Rajin's GitHub](https://img.shields.io/badge/-rajin--khan-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/rajin-khan)         | ![Followers](https://img.shields.io/github/followers/rajin-khan?label=Follow&style=social) |
| **Samiyeel Alim Binaaf**    | North South University | 2212779042 | [![Samiyeel's GitHub](https://img.shields.io/badge/-Pronaaf2k-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Pronaaf2k) | ![Followers](https://img.shields.io/github/followers/Pronaaf2k?label=Follow&style=social) |

## Supervised By:

| Faculty                  | Institution             | Role         | GitHub                                                                                      | Followers                                                   |
|-----------------------|-------------------------|------------|---------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| **Muhammad Shafayat Oshman**    | North South University | Lecturer | [![Sir's GitHub](https://img.shields.io/badge/-Shafayat19-181717?style=for-the-badge&logo=github&logoColor=white)](Shafayat19) | - |

</div>