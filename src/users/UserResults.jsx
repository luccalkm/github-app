import { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../components/layouts/Spinner';
import GithubContext from '../context/github/GithubContext';

export default function UserResults() {
	const { loading, users } = useContext(GithubContext);

	if (!loading) {
		return (
			<div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
				{users.map((user) => (
					<UserItem key={user.id} user={user} />
				))}
			</div>
		);
	} else {
		return (
			<h1 className="text-center text-8xl">
				<Spinner />
			</h1>
		);
	}
}