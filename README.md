The project allows you to fetch weather info by pulling data from a variety of APIs using asynchronous javascript.

### How it works

**Client** makes a location request to **AWS API** reverse proxy => 

**AWS API** forwards request to an **AWS Lambda serverless function** written in Node JS* => 

**AWS Lambda** makes a geocoding request to **Google Maps Geocoding API** => Geocoding data is used to make a weather request to **Open Weather API** => Weather data is used to grab a gif of the weather from **Giphy API** =>

**AWS Lambda** then bundles all of this together and sends it back to the **client**. 

*Server side code available upon request. 

### Attribution

BossaBossa by Kevin MacLeod | https://incompetech.com/
Music promoted by https://www.chosic.com/free-music/all/
Creative Commons Creative Commons: By Attribution 3.0 License
http://creativecommons.org/licenses/by/3.0/