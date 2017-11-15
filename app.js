
new Vue({
	el:"#tasks",
	data:{
		test:"Minh",
		tasks: [
			{body:'dep trai',completed:false},
			{body:'den thui',completed:true}
	
	],
	newTask:''
		
	},
	
	methods:{
		addTask: function(e){
			e.preventDefault();
			this.tasks.push({
				body:this.newTask, completed:false
			});
			this.newTask='';
			
		},
		removeTask: function(task){
			this.tasks.$remove(task);
		}
	}
	

});

new Vue({
	el:"#post",
	data:{
		invisible:true,

		liked:false,

		likesCount:2345,
	},
	
	methods:{
		dolike:function(){
			this.liked = ! this.liked; 
			this.liked ? this.likesCount++ : this.likesCount--;
		}
	},

	
	

});
new Vue({
	el:"#demo",

	
	data:{
		sortKey:'',

		search:'',

		columns:['name','age'],

		order:0,
		reverse:false,

		people:[
		{name:'L.Minh',age:'18'},
		{name:'Khanh',age:'27'},
		{name:'Phuc ku',age:'25'},
		{name:'A.Minh',age:'24'},
		{name:'B.Minh',age:'23'},
		{name:'C.Minh',age:'22'},
		{name:'D.Minh',age:'21'},
		{name:'E.Minh',age:'20'},
		{name:'F.Minh',age:'19'},

		]
	},
	methods:{
		sortBy:function(sortKey){
			this.reverse = this.reverse == (this.sortKey == sortKey) ? false:true;
			this.reverse ? this.order = -1 : this.order = 0; 
			this.sortKey = sortKey;
		}

	}
	
});
