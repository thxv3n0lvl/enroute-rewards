app.controller('RewardsController', [
	'$scope', '$log', 'rewardsService', 'emojiService',
	($scope, $log, $rewards, $emoji) => {
		$scope.emoji = $emoji;
		$scope.newReward = null;
		$scope.fetchRewards = () => {
			$scope.newReward = null;
			$rewards.getAll().then((rewards) => {
				$scope.newReward = angular.copy($rewards.reward({name: 'New Reward'}));
				Object.keys(rewards.data).forEach((key) => {
					rewards.data[key].id = key;
				});
				$scope.rewards = rewards.data;
			});
		};
		$scope.fetchRewards();
		$scope.redeem = (reward) => $rewards.redeem(reward);
	}
]);
