import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from '@/components/RightSidebar';
const Home = () => {
  const loggedIn = {firstName: 'Priyanshu', lastName: 'Chourasiya', email:'priyanshu.4302@gmail.com'};
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type = "greeting"
            title = "Welcome"
            user = {loggedIn?.firstName || 'Guest'}
            subtext = "Access and manage your acount and transactions efficiently."
          />
        <TotalBalanceBox 
          accounts = {[]}
          totalBanks = {1}
          totalCurrentBalance = {1250.35}
          />

          </header>
          RECent TRANSACTIONS
      </div>
      <RightSidebar user={loggedIn}
      transaction ={[]}
      banks={[{currentBalance: 124.50},{currentBalance: 500.23}]} />
    </section>
  )
}

export default Home
