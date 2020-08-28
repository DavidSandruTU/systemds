Search.setIndex({docnames:["api/context/systemds_context","api/matrix/data_gen","api/matrix/federated","api/matrix/matrix","api/onnx_systemds/convert","api/onnx_systemds/onnx_helper","api/onnx_systemds/operator_gen","api/onnx_systemds/render","api/onnx_systemds/util","api/operator/algorithms","api/operator/operation_node","api/script_building/dag","api/script_building/script","api/utils/converters","api/utils/helpers","getting_started/install","getting_started/simple_examples","guide/algorithms","guide/federated","index","onnx_systemds/onnx_systemds","onnx_systemds/onnx_systemds_design"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.todo":2,sphinx:56},filenames:["api/context/systemds_context.rst","api/matrix/data_gen.rst","api/matrix/federated.rst","api/matrix/matrix.rst","api/onnx_systemds/convert.rst","api/onnx_systemds/onnx_helper.rst","api/onnx_systemds/operator_gen.rst","api/onnx_systemds/render.rst","api/onnx_systemds/util.rst","api/operator/algorithms.rst","api/operator/operation_node.rst","api/script_building/dag.rst","api/script_building/script.rst","api/utils/converters.rst","api/utils/helpers.rst","getting_started/install.rst","getting_started/simple_examples.rst","guide/algorithms.rst","guide/federated.rst","index.rst","onnx_systemds/onnx_systemds.rst","onnx_systemds/onnx_systemds_design.rst"],objects:{"systemds.context":{SystemDSContext:[0,0,1,""]},"systemds.context.SystemDSContext":{__init__:[0,1,1,""],close:[0,1,1,""],get_stderr:[0,1,1,""],get_stdout:[0,1,1,""]},"systemds.matrix":{Federated:[2,0,1,""],Matrix:[3,0,1,""],data_gen:[1,2,0,"-"]},"systemds.matrix.Federated":{__init__:[2,1,1,""]},"systemds.matrix.Matrix":{__init__:[3,1,1,""],cholesky:[3,1,1,""],code_line:[3,1,1,""],compute:[3,1,1,""],order:[3,1,1,""],pass_python_data_to_prepared_script:[3,1,1,""],rev:[3,1,1,""],t:[3,1,1,""]},"systemds.matrix.data_gen":{full:[1,3,1,""],rand:[1,3,1,""],seq:[1,3,1,""]},"systemds.onnx_systemds":{convert:[4,2,0,"-"],onnx_helper:[5,2,0,"-"],operator_gen:[6,2,0,"-"],render:[7,2,0,"-"],util:[8,2,0,"-"]},"systemds.onnx_systemds.convert":{onnx2systemds:[20,3,1,""]},"systemds.onnx_systemds.onnx_helper":{NodeTree:[5,0,1,""],PreparedValue:[5,0,1,""],get_graph_inputs_with_initializers:[5,3,1,""],get_graph_inputs_without_initializers:[5,3,1,""],get_value_info:[5,3,1,""],load_model:[5,3,1,""]},"systemds.onnx_systemds.onnx_helper.NodeTree":{remove_end_node:[5,1,1,""]},"systemds.onnx_systemds.operator_gen":{gen_1input_1output_mat_operator:[6,3,1,""],gen_2input_1output_operator:[6,3,1,""],gen_simple_function_call:[6,3,1,""]},"systemds.onnx_systemds.render":{gen_graph_functions:[7,3,1,""],gen_model_header:[7,3,1,""],gen_node_script:[7,3,1,""],gen_script:[7,3,1,""],render_function:[7,3,1,""]},"systemds.onnx_systemds.util":{generate_function_name:[8,3,1,""],resolve_systemds_root:[8,3,1,""]},"systemds.operator":{OperationNode:[10,0,1,""],algorithm:[9,2,0,"-"]},"systemds.operator.OperationNode":{"var":[10,1,1,""],__init__:[10,1,1,""],abs:[10,1,1,""],acos:[10,1,1,""],asin:[10,1,1,""],atan:[10,1,1,""],code_line:[10,1,1,""],compute:[10,1,1,""],cos:[10,1,1,""],cosh:[10,1,1,""],get_lineage_trace:[10,1,1,""],mean:[10,1,1,""],pass_python_data_to_prepared_script:[10,1,1,""],sin:[10,1,1,""],sinh:[10,1,1,""],sum:[10,1,1,""],tan:[10,1,1,""],tanh:[10,1,1,""]},"systemds.operator.algorithm":{l2svm:[9,3,1,""],lm:[9,3,1,""]},"systemds.script_building":{dag:[11,2,0,"-"],script:[12,2,0,"-"]},"systemds.script_building.dag":{DAGNode:[11,0,1,""],OutputType:[11,0,1,""]},"systemds.script_building.dag.DAGNode":{code_line:[11,1,1,""],compute:[11,1,1,""],get_lineage_trace:[11,1,1,""],pass_python_data_to_prepared_script:[11,1,1,""]},"systemds.script_building.script":{DMLScript:[12,0,1,""]},"systemds.script_building.script.DMLScript":{add_code:[12,1,1,""],add_input_from_python:[12,1,1,""],build_code:[12,1,1,""],execute:[12,1,1,""]},"systemds.utils":{converters:[13,2,0,"-"],helpers:[14,2,0,"-"]},"systemds.utils.converters":{matrix_block_to_numpy:[13,3,1,""],numpy_to_matrix_block:[13,3,1,""]},"systemds.utils.helpers":{create_params_string:[14,3,1,""],get_module_dir:[14,3,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","module","Python module"],"3":["py","function","Python function"]},objtypes:{"0":"py:class","1":"py:method","2":"py:module","3":"py:function"},terms:{"0011352":16,"0014692":16,"00324092":16,"00616902":16,"0095087":16,"01039221":16,"01686351":16,"02033445":16,"02649209":16,"03839821":16,"04078623":9,"09961844":9,"0_242":15,"0_xxx":15,"100":16,"11538199":9,"18954599":9,"20386541":9,"2205885":9,"242":15,"26812763":9,"37957689":9,"39956035":9,"4327084":9,"43386048":9,"49858968":9,"54638565":9,"55358873":9,"57000751":9,"5x10":16,"8001":18,"8002":18,"8003":18,"abstract":19,"case":15,"class":[0,2,3,5,7,10,11,12,21],"default":[0,3],"export":[20,21],"float":[1,2,3,9,10],"function":[3,6,7,8,10,14,16,21],"import":[0,6,7,9,15,16,18,20],"int":[0,1,2,3,9,10],"new":[0,16],"return":[0,1,2,3,5,6,7,8,9,10,11,12,14,16],"true":3,"try":0,"var":10,"while":10,For:[11,12,13,14,21],Not:21,OPS:[11,12,13,14],One:16,The:[0,5,6,7,8,9,10,13,15,16,18,19,21],Then:[15,20],There:21,These:[19,21],Using:18,__eq__:10,__init__:[0,2,3,10],__lt__:10,abl:[18,21],abs:10,absolut:10,access:21,aco:10,action:[3,10,11],activ:[3,10,11],actual:[3,10,11,16,21],acycl:11,adapt:21,add:[6,12,21],add_cod:12,add_input_from_python:12,adding:21,addit:[3,10,11],addition:[6,15],addr1:18,addr2:18,addr3:18,address:[2,18],ads:21,after:[15,18,21],again:[0,21],algorithm:16,all:[0,1,3,5,7,10,11,14,15,18,21],allow:21,alreadi:[12,21],also:[0,7,18,20,21],although:3,alwai:0,ani:[0,11,21],annoi:0,anoth:16,apach:[15,19],appli:3,arcco:10,arcsin:10,arctan:10,arg:[2,3],argument:[6,9,21],arrai:[3,10,11,13,16,19],asarrai:18,asin:10,associ:5,atan:10,attribut:21,automat:[0,16,21],avail:21,axi:10,b08:15,base:21,basic:14,becaus:[0,15,21],becom:[18,21],befor:[3,10,11],begin:2,behavior:12,below:[3,21],besid:21,best:21,bin:21,bind:19,bit:15,block:[0,13],bodi:7,bool:[2,3,9,10,11,12],both:14,bottom:[18,21],box:9,buffer:21,build:[3,10,11,12,15,21],build_cod:12,built:16,builtin:[3,10,11],cach:12,calcul:[0,10,16],call:[3,6,10,11,14,16,18,20,21],can:[0,3,9,10,11,12,14,15,16,18,20,21],cell:1,check:[3,5,15,18],choleski:3,clean:19,cleanup:0,clone:15,close:[0,16],code:[3,10,11,12,15,16,21],code_lin:[3,10,11],col:[1,18],column:[1,3,9,10],com:15,combin:21,command:[15,18],comment:21,common:[5,21],compar:21,comparison:10,compat:[15,16],compil:19,complet:[1,16],complex:21,comput:[3,9,10,11,16,18,21],connect:0,consist:21,construct:[3,8,10],contain:[9,15],context:[0,1,2,9,10,12,16,18],contrast:19,conveni:21,convent:21,convers:21,convert:[5,14,21],coordin:18,copi:15,correct:7,correctli:[7,18],correspond:[5,21],cos:10,cosh:10,cpu:19,creat:[0,1,2,3,10,11,12,14,16,18],create_params_str:14,csv:18,current:[0,13,18,20,21],dag:[3,9,10,12,21],dag_root:12,dagnod:[2,3,9,10,11,12],data:[3,10,11,12,16,18,19,21],data_gen:[1,16],dataset:[9,19],datatensor:19,deal:21,debug:21,decomposit:3,decreas:3,dedic:21,defin:[1,3,11,21],definit:[3,21],delimit:18,depend:[15,21],deploy:19,deriv:3,describ:[12,21],develop:16,dict:[2,3,9,10,11,14],dictionari:[9,14,21],differ:[9,12,18,19,21],dim:18,dimens:[18,19],dimension:19,direct:11,directli:[6,16],directori:20,distribut:[1,15,19],dml:[3,4,5,7,10,11,12,14,20],dml_wrapper:21,dmlcode:12,dmlscript:12,doc:21,document:21,doe:[16,18,21],doesn:11,done:18,doubl:[10,16,18],dtype:16,each:[2,7,18,21],easili:16,echo:18,effici:19,either:[3,10,19],element:[16,21],enabl:[18,21],end:[2,5,19],engin:[19,21],ensur:[0,3],entir:19,enumer:11,env:[6,7],environ:[6,7,8,15,20,21],equal:[3,10,11],equival:10,error:[0,10],essenti:21,etc:10,evalu:[3,10,11],even:10,exactli:21,exampl:[9,16,20],except:5,exchang:16,execut:[0,3,10,11,12,15,16,18,19],exist:[5,19,21],expens:0,expertis:19,extens:21,extra:9,facilit:19,fail:21,fals:[3,10,11,12,18],featur:[9,16,19],fed_a:18,fed_b:18,few:15,file:[3,4,5,6,7,18,20],fill:[0,1,16],find:21,finish:0,first:[15,16,18,19,20,21],fit:9,flag:3,folder:21,follow:[0,9,15,18],form:[0,20,21],format:[14,18,21],found:5,fraction:1,free:21,from:[0,1,3,4,5,8,9,10,11,12,15,16,18,19,20,21],full:[1,16],function_cal:21,fundament:3,gen_1input_1output_mat_oper:6,gen_2input_1output_oper:6,gen_graph_funct:[7,21],gen_model_head:7,gen_node_script:7,gen_script:7,gen_simple_function_cal:6,gener:[3,4,6,7,9,10,11,16,20,21],generate_function_nam:[8,21],generated_node_script:7,generatedscriptpart:[6,7],get:[0,3,10,11,12,16],get_graph_inputs_with_initi:5,get_graph_inputs_without_initi:5,get_lineage_trac:[10,11],get_module_dir:14,get_stderr:0,get_stdout:0,get_value_info:5,getter:0,git:15,github:15,give:14,given:[1,3,4,5,7,8,9,13,20],googl:21,gpu:19,graph:[5,6,7,8,11,20],graph_nam:8,graphproto:[5,6,7],guid:18,handi:21,handl:[0,21],has:[0,12],have:[0,4,5,6,15,18,19,20,21],header:[7,18],held:2,help:[19,21],helper:21,here:18,heterogen:19,high:[16,19],homogen:19,howev:21,http:15,human:21,hybrid:19,idea:21,identifi:10,immedi:10,implement:0,improv:21,includ:21,increas:3,increment:1,independ:21,index:[2,3],index_return:3,indic:18,info:5,inform:[3,10,11,21],initi:[5,21],input:[3,4,5,6,9,10,12,20,21],input_onnx_fil:[4,20],input_var:12,insert:[7,21],instal:[17,20],instanc:[0,13,16],instead:[15,21],instruct:[0,18,20],integr:19,intend:[3,10,11,12],interfac:19,intern:[11,12,13,14,21],interpret:1,invok:20,involv:15,is_python_local_data:10,iter:[2,10,14],its:[18,21],itself:21,jar:15,java:[0,3,10,11,15],java_gatewai:[3,10,11,12,13],javaobject:[3,10,11,12,13],jinja2:[6,7,15],jinja:[6,7,21],just:15,jvm:[0,3,10,11,13],jvmview:[3,10,11,13],kwarg:[2,3,9],l2svm:[9,16],label:[9,16],lambd:1,lamda:1,languag:19,larg:21,last:18,lazi:[3,10,11],lazili:10,learn:9,least:0,leav:0,left:[0,6,18,21],let:16,level:[16,19],leverag:18,librari:15,lifecycl:19,like:[6,10,18,21],line:[0,3,10,11,12,15],lineag:[3,10,11,12],list:[0,5,7,18,21],load:[4,5,6,7,20],load_model:5,local:[10,12,19],localhost:18,locat:[18,21],logic:21,look:[15,16,18,21],m_re:16,m_res_np:16,machin:[3,9,10,11],mai:19,main:[7,15,20,21],main_graph:7,make:[15,16,18],manag:0,mani:21,mat:3,matmul:21,matric:[3,18],matrix:[1,2,9,10,13,18],matrix_block_to_numpi:13,matrixblock:13,maven:15,max:1,maximum:1,mean:10,member:21,memori:19,merg:21,metadata:18,method:[3,10,11],might:[0,15],min:1,mix:15,mode:15,model:[4,5,7,9,16,19,20],model_gener:[20,21],modelproto:[5,7],modul:14,more:21,most:[3,10],mtd:18,multi:19,multipl:[12,16],multipli:[16,18],mvn:15,name:[2,3,4,5,8,10,11,12,14,20,21],named_input_nod:10,named_input_var:[3,10,11],named_paramet:14,necessari:[0,5,15,16],need:[0,3,15,18,20,21],nest:19,neutron:21,newer:15,next:18,nice:21,node:[3,5,6,7,11,21],nodeproto:[5,6,7],nodetre:5,non:[1,5,15],none:[1,3,4,5,7,10,11,12,20],normal:1,note:[15,16,18],noth:[10,16],np_arr:13,number:[0,1,3,15,16,21],numpi:[3,9,10,11,13,15,16,18],numpy_to_matrix_block:13,object:[0,2,3,10,11,12,13],older:15,onc:[0,15,18],one:[0,1,6,9,16,18,21],ones:18,onli:[0,1,3,10,11,12,16,21],onnx2systemd:[4,20],onnx:[4,6,7,15],onnx_fil:5,onnx_help:[5,21],onnx_onnx_rel_1_7_ml_pb2:[5,6,7],onnx_systemd:[4,5,6,7,8,20],open:[0,15],openjdk:15,oper:[0,1,2,3,9,11,12,19],operation_nod:[1,2,3,9,10],operationnod:[1,2,3,9,10],operator_gen:[6,7],operator_gener:21,option:[4,7,20],order:[3,7,18,19,21],other:[15,18,21],our:[12,14,16,18],out:[0,9,21],output:[0,3,4,6,9,10,11,12,15,16,20,21],output_dml_fil:[4,20],output_fil:7,output_refer:21,output_test:21,output_typ:[3,10],outputtyp:[10,11],over:19,overload:10,own:21,packag:[15,16,19],pair:[2,3,10,11],param:[0,2,5,6,8],paramet:[1,2,3,4,5,6,7,9,10,11,12,13,14,20],pars:0,part:[6,7,15,21],pass:[0,3,10,11,12],pass_python_data_to_prepared_script:[3,10,11],path:[3,8,14,18],pathlik:[3,14],pdf:1,perform:[9,10],pip3:15,plan:19,pleas:15,point:[3,15],pointer:13,poison:1,port:[0,18],posit:[3,10],possibl:[3,20,21],pre_setup:15,precis:21,prepar:[3,5,10,11,12],prepared_script:[3,10,11],preparedscript:12,preparedvalu:5,prerequisit:17,print:[0,3,9,10,11,16,18],procedur:0,process:[0,16,21],produc:21,profession:21,program:0,project:15,proto3:21,proto:21,protobuf:21,protocol:[0,21],provid:[6,14,16,19,21],py4j:[3,10,11,12,13,15,16],pycharm:21,python:[0,3,10,11,12,15,16,18,19,20,21],queue:0,quick:16,quit:15,rais:5,rand:[1,9],randint:16,random:[0,1,9,16],rang:[2,16],read:0,readabl:21,readi:15,recogn:[3,10],recommend:3,recompil:12,recurs:21,refer:[18,21],rememb:16,remov:[5,21],remove_end_nod:5,render_funct:7,replac:21,repositori:[15,18,21],repres:[1,2,3,5,10,11,14],represent:[13,21],requir:[6,7,18,21],rerun:12,res:18,resolv:21,resolve_systemds_root:8,respect:10,respons:9,restart:21,result:[3,7,10,11,12,16,18],resultvari:12,rev:3,revers:[3,21],right:[6,21],root:15,row:[1,3,10,18],run:[0,13,16,18,21],runtim:15,safe:3,same:[4,20,21],sample_model:21,sample_model_refer:21,sample_model_wrapp:21,save:[3,10,11],savetxt:18,scalar:16,schema:[19,21],scienc:19,scientist:16,scope:21,script:[3,5,6,7,10,11,19,20],script_build:[9,10,11,12],sds:[0,9,16,18],sds_context:[1,2,3,10],search:[5,8],second:18,see:21,seed:[1,9,16],sent:3,separ:[0,21],seq:1,sequenc:[3,10,11],serv:19,server:15,set:[9,16,18,20,21],setup:18,setw:21,sever:21,shall:[5,6,7],shape:[1,9,16],should:[3,9,10,11,12,15,16,18,21],similar:[9,15,16],simpl:[5,6,15,21],simple_mat_add:20,simpli:[10,18,21],simplifi:16,simul:18,sin:10,sinc:[0,21],singl:[1,18,21],sinh:10,size:[1,16],skip:3,snip:21,snippet:[7,21],some:[16,18,21],someth:0,sort:3,spark:19,sparsiti:1,specif:21,specifi:[3,18,21],src:[15,20],stack:18,stai:21,standard:[0,21],start:[0,1,16,21],statement:0,stderr:0,stdout:0,step:[1,15],stick:21,stop:[1,16],store:[11,21],str:[1,2,3,4,5,7,8,9,10,11,12,14,20],strategi:21,string:[3,7,10,11,14,21],structur:[5,7,21],sub:[0,7,21],subprocess:[0,16],sum:[10,18],support:[0,9,18,21],sure:15,symmetr:3,syntax:[0,21],system:[15,19,21],systemd:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,16,17,18,20,21],systemds_context:[1,2],systemds_root:[8,21],systemdscontext:[1,2,3,9,10,12,16,18],take:[8,16,21],taken:0,tan:10,tanh:10,task:19,tcp:0,temp:18,templat:[6,7,21],tensor:[1,19],tensorproto:5,termin:[15,16,18],test:18,test_model:[20,21],test_simpl:20,thei:[10,21],them:[5,7],therebi:10,therefor:[0,10,21],thi:[0,1,2,3,4,10,11,12,15,16,18,19,20,21],three:[15,18,21],till:[3,10,11],todo:[1,12,17],togeth:[7,21],tool:20,top:18,topmost:12,trace:[3,10,11],train:19,translat:21,transpos:3,travers:7,tree:[5,7,21],treenod:5,tupl:[1,2,5,7,10,12,18],two:[6,18],type:[3,10,11,21],unclutt:21,underli:[19,21],understand:21,uniform:1,uniniti:5,union:[1,2,3,9,10,12],unit:21,unittest:20,unlik:11,unnam:[2,3,10,11,14],unnamed_input_nod:10,unnamed_input_var:[3,10,11],unnamed_paramet:14,use:[3,11,12,13,14,15,16,18,21],used:[9,12,14,18,21],user:19,uses:21,using:[0,15,18,21],util:[13,14,21],valid:[8,21],valu:[1,3,5,9,10,11,16,21],value_info:5,valueinfo:5,valueinfoproto:5,var_nam:[3,10,11,12],variabl:[3,8,10,11,12,14,18,21],varianc:10,vector:[1,9],verbos:[3,10,11],veri:21,verifi:15,versatil:19,version:[5,15,21],via:15,view:21,virtual:[3,10,11],wai:[3,21],weight:9,well:[7,19,21],were:21,wheel:15,when:[0,21],which:[0,3,6,7,12,14,16,21],whose:19,why:21,wise:16,within:20,without:[3,10,11,12],work:[18,19,21],worker:2,would:[0,21],wrapper:21,write:5,written:7,yet:16,you:[10,15,18,20,21],your:[0,15,18],zero:[1,16]},titles:["SystemDSContext","Data Generators","Federated","Matrix","Convert","Onnx Helper","Operator Gen","Render","Util","Algorithms","Operation Node","Dag","Script","Converters","Helpers","Install SystemDS","QuickStart","Built-in Algorithms","Federated Environment","SystemDS","QuickStart Onnx","Design"],titleterms:{"final":21,"import":21,"new":21,aggreg:18,algorithm:[9,17],built:17,complex:16,convert:[4,13,20],creat:21,dag:11,data:1,dataset:17,design:21,dml:21,dml_script:21,environ:18,exampl:[18,21],feder:[2,18],file:21,gen:6,gener:1,get:17,goal:21,graph:21,helper:[5,14],implement:21,instal:15,limit:21,matrix:[3,16],model:[17,21],more:16,multipl:18,node:10,onnx:[5,20,21],oper:[6,10,16,21],pip:15,prerequisit:20,quickstart:[16,20],render:[7,21],run:20,script:[12,21],simpl:18,sourc:15,start:18,step:[17,21],sub_graph:21,systemd:[15,19],systemdscontext:0,test:[20,21],testcas:21,tool:21,train:17,travers:21,usag:20,util:8,valid:17,worker:18}})