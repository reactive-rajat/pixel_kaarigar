<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/fc486742-c886-4f37-b350-f64b61332460

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`


### Managing Your Projects 
I have updated `src/data/projects.js` to act as your central hub for managing projects.

**To Change a Project's Name:**
Simply open `src/data/projects.js` and change the `title` field for the project. The UI and the URL slug will automatically update everywhere.

**To Remove a Project:**
Simply delete its block from the `projectEntries` array in `src/data/projects.js`. It will instantly disappear from the site.

**To Add a New Project:**
1. Create a new file (e.g., `MyNewProject.jsx`) in `src/pages/ProjectDetail/projects/`. You can copy an existing one like `BoldIndia.jsx` as a starting template.
2. In `ProjectDetail.jsx`, add it to the mapping: `"my-new-project": lazy(() => import("./projects/MyNewProject"))`.
3. In `projects.js`, add a new entry to the array with the key `folder: "my-new-project"`.

You can review the updated **Walkthrough** artifact for a recap of everything that was done. Feel free to run through the site locally to see the clean new architecture in action! Let me know if you need any further adjustments.
