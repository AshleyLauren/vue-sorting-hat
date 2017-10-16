var sorting_hat = new Vue ({


	el: '#quiz',

	data: {

		// responses: [

  //   { 
  //     text: 'What is your favorite color?',
  //     answers: [
  //       {
  //         id: 1,
  //         text: 'Scarlet',
  //         house: 'Gryffindor'
  //       },
  //       {
  //         id: 2,
  //         text: 'Yellow',
  //         house: 'Hufflepuff'
  //       },
  //       {
  //         id: 3,
  //         text: 'Blue',
  //         house: 'Ravenclaw'
  //       },
  //       {
  //         id: 4,
  //         text: 'Green',
  //         house: 'Slytherin'
  //       }
  //     ]
  //   },


		// ]
	}
})

console.log(data)

// Vue.component('question-list', {
// 	template: '<div class="question-list">\
// 				<p>{{question}}</p>\
// 				<ul>\
// 					<li v-for="question in questions">\
// 						<p><strong>{{questions.text}}</strong></p>\
// 						<p>{{answer.text}}</p>\
// 						<p><strong>{{house}}</strong></p>\
// 						</li>\
// 					</ul>\
// 				</div>',
// 	props: ['question', 'questions']
// 	});




var vm = new Vue({
  el: '#quiz',
  data: {
  		theQuestions: []
  },

  // created: function() {
  // 		$.getScript('data.js')
  // 			.done(function(data) {
  // 				vm.theQuestions = data;
  // 			})
  // }

});
