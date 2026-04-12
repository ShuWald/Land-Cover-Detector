High-level overview of components and functionality, feel free to add more specific details

## Web Application
\- Fetch from Google Maps/Earth API?
    \- Traditional Maps Javascript API
    \- ~~Aerial View API: Aerial View cinematic based on Geospatial data~~
    \- Maps Tiles API?
        \- Fixed tiles as base units = easier classification and flexibility
        \- Less granularity of output
    \- Can also include ground-level images for greater accuracy
        \- Street view: Single point, not always available
        \- 3d tiles option (Overkill...), requires renderer
\- Tools to interpret user-selected location/area
\- Relays related satellite/aerial imagery to classification model

## Classification Model
\- Coverage examples and classification datasets?
    \- How to validate? 
        \- Possible solutions(limited application): 
            \- Google Maps labels
            \- Google Earth Engine predefined maps?
        \- Cross-checking/map comparison functionality required
    \- Unsupervised learning??
\- Computer Vision Model
    \- Pretrained aerial image recognition model? wouldn't match output type
    \- LLM API? requring fine-tuning and more training, more expensive, less image recognition/specific output capabilities
    \- ~~Self-training model 💀~~
    \- (Most viable) Region detection / locator-type models with fine-tuning, requery for all region types
    \- Fine tuning?
        \- Smoother outputs?
\- Output: 2D array corresponding to each category
    \- Parallel 2D arrays or single 3D array depending on approach

## Interactive Map
\- Interprets 2d arrays for region partitions
\- Applies categories into interactive overlay over original map
    \- Google Maps drawing tools — Polygons/Polylines
        \- DrawingManager decpreciated
    \- Google Earth Engine Layers, map.DrawingTools?
    \- Both options will require lat/long computation for polygon points
\- Legend for map
    \- Extra: Legend settings (Classification criteria)