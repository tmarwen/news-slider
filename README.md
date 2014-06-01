News Slider
===========
Prerequisites
--
* Maven 3+
* eXo Platform 4+

Description
--
*Get an animated news slider in 4 steps!*

How to install
--
1. **Clone the project:**
  * Go to the GitHub repository [exo-addons/news-slider](http://github.com/exo-addons/news-slider "exo-addons/news-slider") and clone the project.
  * Switch to the eXo Platform 4.0.x compliant branch.


2. **Build the sources:**
  Using a command terminal, execute underline maven command:

     ```~ $ mvn package -Ddest.server.path=/path/to/tomcat/root/directory```

     It will copy the built jars under _lib/_ folder and the built wars under _webapps/_ (Tomcat specific artifacts directories).

     **Note:** The **_dest.server.path_** property is used to mention the destination server root path where the built artifacts will be copied to. Unless you specify a path, the packaged jars/wars will be copied under the default maven build directory (_$MODULE/target_).

     In case you are using another Application Server rather that _Tomcat AS_, you will need explicitly to specify the target built directories, e.g. for a _4.0.x eXo JBoss Bundle_ it should be as follows:

     ```~ $ mvn package -Ddest.server.path=/path/to/jboss/root/directory
                        -DwarBuildDir=/standalone/deployments/platform.ear
                        -DjarBuildDir=/standalone/deployments/platform.ear/lib```


3. **Add the template via Content Administration:**
Now all your resources are in place and you can start up your server. If you are launching your server for the first time you can skip this step over and move on to the next one as the _NewsSliderCLVTemplate.gtmpl_ will be imported automatically with startup application templates, otherwise you will have to add it by yourself:
  * From Admin navigation bar, go to _Adminstration > Content > Content Administration > Template > List > Add Template_.
  * Copy and paste the content of the template file _NewsSliderCLVTemplate.gtmpl_ which you can find under _/news-slider/artifacts/src/main/resources/conf/portal/wcm-artifacts/application-templates/content-list-viewer_ with Template Name as `NewsSliderCLVTemplate.gtmpl`.


4. **Add the CLV and configure it:**
  * Now, we are ready to add our news slider into a website.
  * Go to a given website, ACME for example, edit the layout, add a new portlet `(content > content list)` to a given page.
  * Edit this content list portlet, configure it by selecting the news folder path (for test purpose, you can import the _"NewFolder.xml"_ node which you can find under _news-slider/artifacts/src/main/resources/conf/portal/wcm/artifacts/site-resources/news-slider-templates_), and selecting our new CLV template `NewsSliderCLVTemplate`
  * It's possible also to configure the slider on terms of amount of news, existence of pagination or not.

**Enjoy!**