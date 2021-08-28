"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[68],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return p}});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(a),p=n,m=h["".concat(l,".").concat(p)]||h[p]||d[p]||i;return a?o.createElement(m,r(r({ref:t},u),{},{components:a})):o.createElement(m,r({ref:t},u))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6681:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return h}});var o=a(7462),n=a(3366),i=(a(7294),a(3905)),r=["components"],s={title:"Reliable ingestion from AWS S3 using Hudi",excerpt:"From listing to log-based approach, a reliable way of ingesting data from AWS S3 into Hudi.",author:"codope",category:"blog"},l=void 0,c={permalink:"/blog/2021/08/23/s3-events-source",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2021-08-23-s3-events-source.md",source:"@site/blog/2021-08-23-s3-events-source.md",title:"Reliable ingestion from AWS S3 using Hudi",description:"In this post we will talk about a new deltastreamer source which reliably and efficiently processes new data files as they arrive in AWS S3.",date:"2021-08-23T00:00:00.000Z",formattedDate:"August 23, 2021",tags:[],readingTime:5.38,truncated:!0,prevItem:{title:"Asynchronous Clustering using Hudi",permalink:"/blog/2021/08/23/async-clustering"},nextItem:{title:"Improving Marker Mechanism in Apache Hudi",permalink:"/blog/2021/08/18/improving-marker-mechanism"}},u=[{value:"Design",id:"design",children:[]},{value:"Advantages",id:"advantages",children:[]},{value:"Configuration and Setup",id:"configuration-and-setup",children:[]},{value:"Conclusion and Future Work",id:"conclusion-and-future-work",children:[]}],d={toc:u};function h(e){var t=e.components,s=(0,n.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this post we will talk about a new deltastreamer source which reliably and efficiently processes new data files as they arrive in AWS S3.\nAs of today, to ingest data from S3 into Hudi, users leverage DFS source whose ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/178767948e906f673d6d4a357c65c11bc574f619/hudi-utilities/src/main/java/org/apache/hudi/utilities/sources/helpers/DFSPathSelector.java"},"path selector")," would identify the source files modified since the last checkpoint based on max modification time.\nThe problem with this approach is that modification time precision is upto seconds in S3. It maybe possible that there were many files (beyond what the configurable source limit allows) modifed in that second and some files might be skipped.\nFor more details, please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/HUDI-1723"},"HUDI-1723"),".\nWhile the workaround is to ignore the source limit and keep reading, the problem motivated us to redesign so that users can reliably ingest from S3."),(0,i.kt)("h2",{id:"design"},"Design"),(0,i.kt)("p",null,"For use-cases where seconds granularity does not suffice, we have a new source in deltastreamer using log-based approach.\nThe new ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/178767948e906f673d6d4a357c65c11bc574f619/hudi-utilities/src/main/java/org/apache/hudi/utilities/sources/S3EventsSource.java"},"S3 events source")," relies on change notification and incremental processing to ingest from S3.\nThe architecture is as shown in the figure below."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Different components in the design",src:a(5091).Z})),(0,i.kt)("p",null,"In this approach, users need to ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/NotificationHowTo.html"},"enable S3 event notifications"),".\nThere will be two types of deltastreamers as detailed below. "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/hudi/blob/178767948e906f673d6d4a357c65c11bc574f619/hudi-utilities/src/main/java/org/apache/hudi/utilities/sources/S3EventsSource.java"},"S3EventsSource"),": Create Hudi S3 metadata table.\nThis source leverages AWS ",(0,i.kt)("a",{parentName:"li",href:"https://aws.amazon.com/sns"},"SNS")," and ",(0,i.kt)("a",{parentName:"li",href:"https://aws.amazon.com/sqs/"},"SQS")," services that subscribe to file events from the source bucket.",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"- Events from SQS will be written to this table, which serves as a changelog for the subsequent incremental puller.\n- When the events are committed to the S3 metadata table they will be deleted from SQS.\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/hudi/blob/178767948e906f673d6d4a357c65c11bc574f619/hudi-utilities/src/main/java/org/apache/hudi/utilities/sources/S3EventsHoodieIncrSource.java"},"S3EventsHoodieIncrSource")," and uses the metadata table written by S3EventsSource.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Read the S3 metadata table and get the objects that were added or modified. These objects contain the S3 path for the source files that were added or modified."),(0,i.kt)("li",{parentName:"ul"},"Write to Hudi table with source data corresponding to the source files in the S3 bucket.")))),(0,i.kt)("h2",{id:"advantages"},"Advantages"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Decoupling"),": Every step in the pipeline is decoupled. The two sources can be started independent of each other. We imagine most users run a single deltastreamer to get all changes for a given bucket and can fan-out multiple tables off that."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Performance and Scale"),": The previous approach used to list all files, sort by modification time and then filter based on checkpoint. While it did prune partition paths, the directory listing could still become a bottleneck. By relying on change notification and native cloud APIs, the new approach avoids directory listing and scales with the number of files being ingested."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Reliability"),": Since there is no longer any dependency on the max modification time and the fact that S3 events are being recorded in the metadata table, users can rest assured that all the events will be processed eventually."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Fault Tolerance"),": There are two levels of fault toerance in this design. Firstly, if some of the messages are not committed to the S3 metadata table, then those messages will remain in the queue so that they can be reprocessed in the next round. Secondly, if the incremental puller fails, then users can query the S3 metadata table for the last commit point and resume the incremental puller from that point onwards (kinda like how Kafka consumers can reset offset)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Asynchronous backfills"),': With the log-based approach, it becomes much easier to trigger backfills. See the "Conclusion and Future Work" section for more details.')),(0,i.kt)("h2",{id:"configuration-and-setup"},"Configuration and Setup"),(0,i.kt)("p",null,"Users only need to specify the SQS queue url and region name to start the S3EventsSource (metadata source)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"hoodie.deltastreamer.s3.source.queue.url=https://sqs.us-west-2.amazonaws.com/queue/url\nhoodie.deltastreamer.s3.source.queue.region=us-west-2\n")),(0,i.kt)("p",null,"There are a few other configurations for the metadata source which can be tuned to suit specific requirements:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"em"},"hoodie.deltastreamer.s3.source.queue.long.poll.wait")),": Value can range in ","[0, 20]"," seconds. If set to 0 then metadata source will consume messages from SQS using short polling. It is recommended to use long polling because it will reduce false empty responses and reduce the cost of using SQS. By default, this value is set to 20 seconds."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"em"},"hoodie.deltastreamer.s3.source.queue.visibility.timeout")),": Value can range in ","[0, 43200]"," seconds (i.e. max 12 hours). SQS does not automatically delete the messages once consumed. It is the responsibility of metadata source to delete the message after committing. SQS will move the consumed message to in-flight state during which it becomes invisible for the configured timeout period. By default, this value is set to 30 seconds."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"em"},"hoodie.deltastreamer.s3.source.queue.max.messages.per.batch")),": Maximum number of messages in a batch of one round of metadata source run. By default, this value is set to 5.")),(0,i.kt)("p",null,"To setup the pipeline, first ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/NotificationHowTo.html"},"enable S3 event notifications"),".\nDownload the ",(0,i.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/com.amazonaws/aws-java-sdk-sqs"},"aws-java-sdk-sqs")," jar.\nThen start the S3EventsSource and  S3EventsHoodieIncrSource using the HoodieDeltaStreamer utility as shown in sample commands below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# To start S3EventsSource\nspark-submit \\\n--jars "/home/hadoop/hudi-utilities-bundle_2.11-0.9.0.jar,/usr/lib/spark/external/lib/spark-avro.jar,/home/hadoop/aws-java-sdk-sqs-1.12.22.jar" \\\n--master yarn --deploy-mode client \\\n--class org.apache.hudi.utilities.deltastreamer.HoodieDeltaStreamer /home/hadoop/hudi-packages/hudi-utilities-bundle_2.11-0.9.0-SNAPSHOT.jar \\\n--table-type COPY_ON_WRITE --source-ordering-field eventTime \\\n--target-base-path s3://bucket_name/path/for/s3_meta_table \\\n--target-table s3_meta_table  --continuous \\\n--min-sync-interval-seconds 10 \\\n--hoodie-conf hoodie.datasource.write.recordkey.field="s3.object.key,eventName" \\\n--hoodie-conf hoodie.datasource.write.keygenerator.class=org.apache.hudi.keygen.ComplexKeyGenerator \\\n--hoodie-conf hoodie.datasource.write.partitionpath.field=s3.bucket.name --enable-hive-sync \\\n--hoodie-conf hoodie.datasource.hive_sync.partition_extractor_class=org.apache.hudi.hive.MultiPartKeysValueExtractor \\\n--hoodie-conf hoodie.datasource.write.hive_style_partitioning=true \\\n--hoodie-conf hoodie.datasource.hive_sync.database=default \\\n--hoodie-conf hoodie.datasource.hive_sync.table=s3_meta_table \\\n--hoodie-conf hoodie.datasource.hive_sync.partition_fields=bucket \\\n--source-class org.apache.hudi.utilities.sources.S3EventsSource \\\n--hoodie-conf hoodie.deltastreamer.source.queue.url=https://sqs.us-west-2.amazonaws.com/queue/url\n--hoodie-conf hoodie.deltastreamer.s3.source.queue.region=us-west-2\n\n# To start S3EventsHoodieIncrSource\nspark-submit \\\n--jars "/home/hadoop/hudi-utilities-bundle_2.11-0.9.0.jar,/usr/lib/spark/external/lib/spark-avro.jar,/home/hadoop/aws-java-sdk-sqs-1.12.22.jar" \\\n--master yarn --deploy-mode client \\\n--class org.apache.hudi.utilities.deltastreamer.HoodieDeltaStreamer /home/hadoop/hudi-packages/hudi-utilities-bundle_2.11-0.9.0-SNAPSHOT.jar \\\n--table-type COPY_ON_WRITE \\\n--source-ordering-field eventTime --target-base-path s3://bucket_name/path/for/s3_hudi_table \\\n--target-table s3_hudi_table  --continuous --min-sync-interval-seconds 10 \\\n--hoodie-conf hoodie.datasource.write.recordkey.field="pull_request_id" \\\n--hoodie-conf hoodie.datasource.write.keygenerator.class=org.apache.hudi.keygen.SimpleKeyGenerator \\\n--hoodie-conf hoodie.datasource.write.partitionpath.field=s3.bucket.name --enable-hive-sync \\\n--hoodie-conf hoodie.datasource.hive_sync.partition_extractor_class=org.apache.hudi.hive.MultiPartKeysValueExtractor \\\n--hoodie-conf hoodie.datasource.write.hive_style_partitioning=true \\\n--hoodie-conf hoodie.datasource.hive_sync.database=default \\\n--hoodie-conf hoodie.datasource.hive_sync.table=s3_hudi_v6 \\\n--hoodie-conf hoodie.datasource.hive_sync.partition_fields=bucket \\\n--source-class org.apache.hudi.utilities.sources.S3EventsHoodieIncrSource \\\n--hoodie-conf hoodie.deltastreamer.source.hoodieincr.path=s3://bucket_name/path/for/s3_meta_table \\\n--hoodie-conf hoodie.deltastreamer.source.hoodieincr.read_latest_on_missing_ckpt=true\n')),(0,i.kt)("h2",{id:"conclusion-and-future-work"},"Conclusion and Future Work"),(0,i.kt)("p",null,"This post introduced a log-based approach to ingest data from S3 into Hudi tables reliably and efficiently. We are actively improving this along the following directions."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"One stream of work is to add support for other cloud-based object storage like Google Cloud Storage, Azure Blob Storage, etc. with this revamped design."),(0,i.kt)("li",{parentName:"ul"},"Another stream of work is to add resource manager that allows users to setup notifications and delete resources when no longer needed."),(0,i.kt)("li",{parentName:"ul"},"Another interesting piece of work is to support ",(0,i.kt)("strong",{parentName:"li"},"asynchronous backfills"),". Notification systems are evntually consistent and typically do not guarantee perfect delivery of all files right away. The log-based approach provides enough flexibility to trigger automatic backfills at a configurable interval e.g. once a day or once a week.")),(0,i.kt)("p",null,"Please follow this ",(0,i.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/HUDI-1896"},"JIRA")," to learn more about active development on this issue.\nWe look forward to contributions from the community. Hope you enjoyed this post. "),(0,i.kt)("p",null,"Put your Hudi on and keep streaming!"))}h.isMDXComponent=!0},5091:function(e,t,a){t.Z=a.p+"assets/images/s3_events_source_design-532d055acbbcc26d1803fdf278e9cb83.png"}}]);