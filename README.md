# Land-Cover-Detector

Build a web application that uses satellite or aerial imagery to detect and classify different land cover types (e.g., vegetation, water, urban areas, bare soil) within a user-selected region. The system should process the imagery, apply a classification model, and display an interactive map with color-coded land cover categories and basic statistics like coverage percentages.

## To Run Frontend
- Add a secrets.txt file with your Maps API key in the main directory
- Run `npx serve -l 5500` (node and serve package required)
- Navigate to http://localhost:5500/index.html

Note: Can replace 5500 with any desired port number

## For model
\- Python required
\- Navigage to backend folder
\- Create virtual environment `python -m venv venv`
\- Activate your virtual environment `venv/Scripts/activate`
\- Install packages from `requirements.txt` using `pip install -r requirements.txt` (Takes a couple of minutes)
\- For now, walk through the `prithvi_example.ipynb` notebook
    \- Installing dataset takes ~ 20 minutes? (Depending on network, Might take longer idk)
