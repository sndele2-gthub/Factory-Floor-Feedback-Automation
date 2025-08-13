# Automated Factory Floor Feedback System ✨
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## Overview 🚀
An automated system transforming **factory floor feedback**. It intelligently classifies, prioritizes, and manages critical operational insights, **bridging the communication gap** between employees and leadership to **drive cross-functional collaboration**. This project demonstrates an end-to-end solution combining custom backend logic, cloud automation, and dynamic data management.

---

## The Challenge: Before Automation 😔
Prior to this system's implementation, factory floor feedback faced significant bottlenecks, leading to inefficiencies and missed opportunities:

* **Lack of Formal Feedback Channels**: No structured or official way for floor staff to submit feedback to different departments; reliance on informal methods like word-of-mouth or unmanaged emails.
* **Inconsistent Categorization**: Feedback was categorized haphazardly, leading to disorganization and making it difficult to track types of issues or identify recurring problems.
* **Inconsistent Prioritization**: There was no standardized method for prioritizing feedback, meaning truly urgent or critical issues might not have been recognized and addressed promptly.
* **Risk of Missing Critical Insights**: Important information from the factory floor could easily be overlooked, delayed, or lost entirely, posing potential operational or safety risks.
* **Inefficient & Slow Processing**: The entire process of collecting, sorting, and initially routing feedback was manual, time-consuming, and prone to backlogs.
* **Disengaged Staff**: Employees often felt unheard or that their contributions didn't lead to action, diminishing morale and discouraging future valuable input.

---

## Our Solution: An Intelligent & Automated System ✅
This system was developed to directly tackle the aforementioned challenges by integrating Python, Microsoft Power Automate, and Excel.

### 1. Intelligent Backend (Python Flask API) 🧠
At the core, a Python Flask API intelligently processes incoming feedback:

* **Automated Classification**: Utilizes a robust `KNOWLEDGE_BASE` and keyword matching to automatically assign a `FeedbackCategory` (e.g., "Safety Concern", "Machine/Equipment Issue", "Process Improvement Idea").
* **Dynamic Prioritization**: Based on critical keywords and configured rules, it assigns an `AutoPriority` (e.g., "Critical", "High", "Medium", "Low") to each submission.
* **Duplicate Detection & Escalation**: Analyzes new feedback against recent history (within a defined time window and similarity threshold) to identify duplicates. If a similar issue is reported multiple times, it automatically escalates its priority to "Critical" to ensure immediate attention.

### 2. Automated Workflow (Microsoft Power Automate) ⚙️
Power Automate acts as the orchestrator, ensuring seamless data flow and real-time alerts:

* **Form Submission Trigger**: Automatically initiates the flow upon new feedback submission (e.g., from a Microsoft Form).
* **API Integration**: Sends the raw feedback data as an HTTP POST request to the deployed Python Flask API.
* **Data Logging**: Adds the categorized and prioritized feedback (received from Flask) as a new row to the central `Raw_Data` table in Excel.
* **Dynamic Email Notifications**: Based on the `AutoPriority` from the Flask API, it sends targeted email alerts to relevant departments or individuals. Subject lines dynamically include the category and priority for quick triage. Configurable for CC recipients.

### 3. Dynamic Data Management (Microsoft Excel with Power Query) 📊
Excel serves as the central data repository and provides dynamic, actionable views:

* **Central `Raw_Data` Log**: Stores all incoming feedback in a structured Excel Table, serving as the single source of truth.
* **Power Query Driven Views**: Multiple sheets (`Critical_Priority`, `High_Priority`, `Medium_Priority`, `Low_Priority`) use Power Query connections to dynamically filter and display only the relevant feedback items based on their priority.
* **Automated Refresh**: These Power Query connections are configured to automatically refresh upon opening the workbook, ensuring stakeholders always see the most current and relevant data.
* **Archiving**: A dedicated `Archive` sheet (or separate flow) manages historical data, keeping the live sheets clean.

---

## Visual Showcase ✨
See the system's impact and mechanics brought to life:

* [The Challenge (GIF)](./presentation/gifs/slide1_visual.gif)
* [Our Solution (GIF)](./presentation/gifs/slide2_visual.gif)
* [The Impact (GIF)](./presentation/gifs/slide3_visual.gif)

---

## Key Features 🌟
* **Automated AI-Powered Classification**: Categorizes feedback into predefined types (Safety, Machine, Process, Other).
* **Dynamic Priority Assignment**: Instantly flags issues as Critical, High, Medium, or Low urgency.
* **Intelligent Duplicate Detection & Escalation**: Identifies recurring problems and raises their priority to ensure resolution.
* **Real-time Email Notifications**: Timely, targeted alerts to appropriate teams with clear priority indicators.
* **Centralized & Organized Data**: A single Excel workbook provides a clean, dynamic, and filterable overview of all feedback.
* **Improved Communication**: Bridges the gap between floor staff and management, ensuring valuable insights are heard and acted upon.
* **Increased Operational Efficiency**: Streamlines the entire feedback process, reducing manual effort and accelerating response times.

---

## Technologies Used 🛠️
* **Backend Logic**: Python (Flask)
* **Automation & Integration**: Microsoft Power Automate
* **Data Management & Reporting**: Microsoft Excel (Power Query, Excel Tables)
* **Presentation Visuals**: React, Tailwind CSS, HTML, JavaScript
* **Future Enhancements**: Google Gemini API (for advanced text processing like summarization and action item suggestions)

---

## How to Explore This Project 🔍
You can dive into the various components of this system:

* **Backend Logic**: Review the Python Flask application code in the [`backend/`](./backend/) directory to understand the classification and prioritization algorithms.
* **Automated Workflow**: Explore the Power Automate flow documentation and screenshots in the [`power-automate/`](./power-automate/) directory to see the automation in action.
* **Dynamic Data Management**: Access the anonymized Excel workbook in the [`data/`](./data/) directory. Download the `.xlsx` file to interact with the Power Query connections and PivotTables.
* **Presentation Visuals**: See the React-based presentation visuals come alive by navigating to [`frontend-visuals/preview_html/`](./frontend-visuals/preview_html/) and opening the `*.html` files directly in your web browser.
* **React Components**: Inspect the raw React JSX code for the presentation visuals in the [`frontend-visuals/`](./frontend-visuals/) directory.

---

## Future Enhancements 💡
The system is designed with scalability in mind. Potential future enhancements could include:

* **LLM-Powered Summarization**: Using the Google Gemini API to generate concise summaries of detailed feedback entries.
* **Intelligent Action Item Suggestions**: Leveraging LLMs to propose immediate next steps or responsible teams based on the feedback content.
* **Sentiment Analysis**: Integrating LLMs to gauge the sentiment of feedback, providing additional context for prioritization.
* **Web-based Dashboard**: Building a full interactive dashboard on top of the Excel data for more advanced visualizations and management.

---

## About the Author 👤
**\[Your Name\]**
\[Link to your LinkedIn Profile (e.g., `[LinkedIn](https://www.linkedin.com/in/your-profile/)`)\]
\[Optional: Your personal website or other relevant links]
