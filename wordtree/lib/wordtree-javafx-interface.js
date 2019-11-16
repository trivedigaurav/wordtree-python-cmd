function getSentenceStats() {
  	updateSentenceStats(data.matches);
}

function updateSentenceStats(matches){
	total = data.total;
  	percentange = 100*matches/total;
  // JavaFXApp.setLabelText("Documents included: "+ 
                            // matches+"/"+total+
                            // " ( "+percentange.toFixed(2)+"% ) ");
}

function updateFeedback(selected, root){
	// JavaFXApp.updateFeedback(selected, root);
}