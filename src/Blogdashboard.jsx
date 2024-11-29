import React from 'react'
import './Blogdashboard.css'
const Blogdashboard = () => {
  return (
    <div>
        <nav className='blog'>  <h1>Blog Dashboaard</h1>
        
        </nav>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi qui, nemo sint adipisci veritatis eveniet recusandae corporis libero, tempore illum sequi quaerat laborum magnam consequatur ullam repudiandae voluptatibus illo, mollitia itaque. Nesciunt repellendus eius velit a ipsa tenetur. Voluptatum maxime reiciendis nam voluptatibus ab dolor fuga corporis nostrum reprehenderit eligendi, qui ipsam consectetur obcaecati laboriosam, beatae hic ad atque perspiciatis error. Fuga quae autem aliquam beatae est ex reprehenderit dignissimos ducimus facere dicta quisquam assumenda accusantium, voluptatum labore voluptatem soluta. Asperiores eos illum voluptas omnis officiis. Voluptatum quis fuga nulla iure maiores, officiis explicabo nam alias. Incidunt magni nisi recusandae.</p><br />
      <div className='formd'>
        <form>
            <input type="text" name="bname" id="bid" placeholder='Enter Blog Name'/>
            <input type="text" placeholder='Author Name'/>
            <textarea placeholder='Description'></textarea>
        </form>
        </div>
    </div>
  )
}

export default Blogdashboard 