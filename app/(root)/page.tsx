import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import { LassoSelect } from 'lucide-react'


const Home = async() => {
  const loggedIn = await getLoggedInUser();
  return (
    <section className="home">
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
          type="greeting"
          title="Welcome"
          user={loggedIn?.name || 'Guest'}
          subtext="Access and Manage your account and transactions efficiently."
          />

        <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={4340.35}

        />
        </header>

        RECENT TRANSACTIONS
      </div>

      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 1250.30 },{currentBalance: 2345.56 }]}
      />
    </section>
  )
}

export default Home