1. Team members: Yu Chen

2. Objectives of the projects including a brief context of the project, and what tasks you're aiming to solve using visualizations
This visualization is a milestone for whoever needs more detailed location information regarding NYC crimes. 
A lot of the data are using zipcode as location boundaries. However, the crime quantity varies within each zipcode. What could happen is that one street within one block has much higher crime amounts while the rest just have a few. Under such circumstance, the zipcode where the crime has happened are showing high records, but in real life it is only one street that is having the high crime. Therefore I don't think that zipcode is a good idea to map crime amount data. 

3. Data set: Zipcode boundaries: http://data.beta.nyc//dataset/3bf5fb73-edb5-4b05-bb29-7c95f4a727fc/resource/6df127b1-6d04-4bb7-b983-07402a2c3f90/download/f4129d9aa6dd4281bc98d0f701629b76nyczipcodetabulationareas.geojson
             NYC Crime data: https://raw.githubusercontent.com/jazzzchan/data_vis_project/master/crimezip%20(1).csv this is filtered to 2015 data. the original data was extracted from NYPD historical dataset. I originally wanted to include all historical data from 1915 till 2017, however the dataset is too big and everytime I run on pythonanywhere it consumes all the CPU. I have applied two accounts because of this reason. Additionally, after merging datasets for zipcode reverse, many information was misinterpretated and became "nan", only most of the data in 2015 has remained.
4. Descriptions on your visualization design choices. For example, why you're choosing the types of visualization, representations, and/or interactions in your project.
I am choosing this visualization is because this is the visualization that I have the least error operating with. And it is also having the function of indicating specific location information that I wanted for this project. I have tried the heatmap, however, quantity per zipcode is not optimal for what I am looking for. For this project I originally wanted to do semi-supervised audio learning using VGG-ish, however after looking into it, the audio dataset needs to be hosted on SSL (assumption is that the audio is input through microphone and there is privacy issue related to that), didn't know how to host it on SSL and couldn't figure out how to host on SSL. Therefore the objective of this project was switched to an opendataset regarding NYC crimes. 
5. Outcome and Evaluation: how did the visualization helps your users to achieve the objectives.
This visualization may not be the most efficient in providing area information but it is the maximum I can achieve utilizing what I have learned in this class. It can provide users an idea of where in New York has the most quantites within each crime catogery in a more detailed perspective. 
