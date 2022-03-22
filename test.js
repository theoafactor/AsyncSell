function DashPayCore(){

        this.appName = "DashPay SellJS"
    
        //Load RXJS
        scriptElement = document.createElement("script");
        scriptElement.src = "https://cdnjs.cloudflare.com/ajax/libs/rxjs/8.0.0-alpha.3/rxjs.umd.min.js";
        scriptElement.async = true;
        document.head.appendChild(scriptElement);
    
        //Load LocalForage
        localForageScript = document.createElement("script");
        localForageScript.src = "https://unpkg.com/localforage@1.10.0/dist/localforage.js";
        localForageScript.async = true;
    
        document.head.appendChild(localForageScript);
    
    
        this.init_dependencies = () =>{
            return new Promise((resolve, reject) =>{
                setTimeout(() =>{
                    resolve({
                        rxjs: rxjs,
                        localforage: localforage
                    })
                }, 1000)
    
            })
    
        }
            
    
    }
    
    
    const dashpay_ = (function(dashpaycore){
    
        console.log(dashpaycore);
    
        let dependencies = dashpaycore.init_dependencies()
    
        //console.log(dependencies)
    
    
        const testing = () =>{
            console.log("working")
        }

        const getDependencies = async() =>{
            dependencies = await dependencies;

            return dependencies;
        }
    
    
        return {
            testing: testing,
            getDependencies: getDependencies

        }
       
    
    
    }(new DashPayCore));
    
    

//const dp_ = await dashpay_

