heiheihei = function () {
 	total_count = db.luckyRewardHistory.count();
	with_result = db.luckyRewardHistory.aggregate([  {$group:  {_id:  '$ruby', count_item: {$sum: 1}  }   }  ]);
	
        total_ruby = 0;
	print('Item', 'Count', 'Percent');
        with_result.forEach(function(item){ruby = item._id; count_item = item.count_item;  total_ruby += ruby*count_item; print('Ruby'+ruby, count_item, (count_item/total_count*100).toFixed(3)+'%')});

	print('\n');
	print('Total Count: ', total_count);
	print('Total Reward Ruby: ', total_ruby);
	print('Reward Rate: ', (total_ruby/1000/total_count*100).toFixed(3)+'%');
}
