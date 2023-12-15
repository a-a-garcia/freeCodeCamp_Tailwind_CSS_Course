import './App.css'
import './index.css'

function App() {

  return (
    <>
     <h1 className="bg-green-600 border-8 border-green-200 text-reactjs-200">
        Hello world!
      </h1>
     <h1 className="bg-yellow-600 text-reactjs">
        Hello world!
      </h1>
      <p className="mb-1 text-xs sm:text-base md:text-lg lg:text-3xl" >Here is a sentence</p>
      <p className='mb-1 bg-[#bada55]'>Here is another sentence</p>
      <hr></hr>
      <div>
        <h1>Typography</h1>
        <h1 className="text-3xl line-through mb-1">Title 1</h1>
        <h2 className="text-2xl mb-2">Title 2</h2>
        <h3 className="text-xl italic mb-3">Title 3</h3>
        <p className="text-base overline mb-4">A regular paragraph</p> {/*base is originally 16px, but you can customize.. for the ex we set it to 18px. */}
        <p className="text-sm underline decoration-wavy decoration-1 underline-offset-4 decoration-red-500">A description paragraph</p>
        <p className="break-words">this is a long sentence with a lot of words to explain with truncate to explain that truncate will truncate my sentance askdjfnklsadnfkjasndfkjlsdnfkljansdfkjnasdjkf.... </p>
        <p className="note text-xs">A little note</p>
      </div>
      <hr></hr>
      <div>
        <h1>Spaces and Sizing</h1>
        <div className='flex space-x-2 space-y-4 flex-col'>
          <div className="bg-blue-500 w-1/5 font-bold">Box with margin</div>
          <div className="bg-red-500 w-4/5 font-bold">Box with padding</div>
        </div>
      </div>
      <hr></hr>
      <div>
        <h1>Flex</h1>
        <div className="parent">
          <div>Header</div>
          <div className="flex md:flex-col">
              <div className='w-32 bg-sky-500'>Main content</div>
              {/* 'grow' (translates to flex-grow) will make the main content take up all of the remaining width */}
              <div className='w-full bg-red-600'>
                {/* 'basis' or flex-basis does something similar to flex-grid-columns, splitting the space fractionally */}
                <div>Sidebar</div>
                <div>Menu</div>
              </div>
              {/* <div className=''>Another Sidebar</div> */}
          </div>
        </div>
        <div className="parent">
          <div>Header</div>
          <div className="flex md:flex-col">
            <div className='flex flex-wrap'>
              <div className='w-42'>1</div>
              <div className='w-42'>2</div>
              <div className='w-42'>3</div>
              <div className='w-42'>4</div>
              <div className='w-42'>5</div>
            </div>
            {/* wrap will force the items to go to the next line, because each are taking the full width */}
            {/* no wrap will keep items on the same line, even if they are all w-full */}
          </div>
        </div>
      </div>
      <hr></hr>
      <div>
        <h1>Grid</h1>
        <div className='text-white Parent bg-slate-900 mb-5'>
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-sky-500 p-6 rounded-lg">1</div>
              <div className="bg-sky-500 p-6 rounded-lg">2</div>
              <div className="bg-sky-500 p-6 rounded-lg">3</div>
              <div className="bg-sky-500 p-6 rounded-lg col-span-3">4</div>
              {/* you should only use a max col-span on the amount of cols that there actually are. */}
              <div className="bg-sky-500 p-6 rounded-lg">5</div>
              <div className="bg-sky-500 p-6 rounded-lg">6</div>
            </div>
          </div>
          <hr />
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
              <div class="grid grid-cols-6 gap-4">
                <div class="bg-sky-500 p-6 rounded-lg col-start-2 col-span-4 ...">01</div>
                <div class="bg-sky-500 p-6 rounded-lg col-start-1 col-end-3 ...">02</div>
                <div class="bg-sky-500 p-6 rounded-lg col-end-7 col-span-2 ...">03</div>
                <div class="bg-sky-500 p-6 rounded-lg col-start-1 col-end-7 ...">04</div>
              </div>
            </div>
            <div className="container mx-auto mb-5">
              <div class="grid grid-flow-col auto-cols-max">
                <div class="bg-sky-500 p-6 rounded-lg col-start-2 col-span-4 ...">01</div>
                <div class="bg-sky-500 p-6 rounded-lg col-start-1 col-end-3 ...">02</div>
                <div class="bg-sky-500 p-6 rounded-lg col-end-7 col-span-2 ...">03</div>
              </div>
            </div>
            <div className="container mx-auto mb-5">
              <div class="grid grid-flow-col grid-rows-4 gap-4">
                <div class="bg-pink-500 p-6 rounded-lg row-span-4">01</div>
                <div class="bg-pink-500 p-6 rounded-lg">02</div>
                <div class="bg-pink-500 p-6 rounded-lg">03</div>
                <div class="bg-pink-500 p-6 rounded-lg">04</div>
                <div class="bg-pink-500 p-6 rounded-lg">05</div>
                <div class="bg-pink-500 p-6 rounded-lg">06</div>
                <div class="bg-pink-500 p-6 rounded-lg">07</div>
                <div class="bg-pink-500 p-6 rounded-lg">08</div>
                <div class="bg-pink-500 p-6 rounded-lg">09</div>
                <div class="bg-pink-500 p-6 rounded-lg">10</div>
                <div class="bg-pink-500 p-6 rounded-lg">11</div>
                <div class="bg-pink-500 p-6 rounded-lg">12</div>
              </div>
            </div>
            <div className="container mx-auto">
              <div class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-4">
                {/* grid-flow-row-dense will fulfill any remaining space without escaping the bounds/width of the layout. It will wrap to the next line if number of columns you are trying to span is less than the total available. helpful for empty space resulting from flex and grid.  */}
                <div class="bg-pink-500 p-6 rounded-lg col-span-2">01</div>
                <div class="bg-pink-500 p-6 rounded-lg col-span-2">02</div>
                <div class="bg-pink-500 p-6 rounded-lg">03</div>
                <div class="bg-pink-500 p-6 rounded-lg">04</div>
                <div class="bg-pink-500 p-6 rounded-lg">05</div>
                <div class="bg-pink-500 p-6 rounded-lg col-span-2">06</div>
                <div class="bg-pink-500 p-6 rounded-lg">07</div>
                <div class="bg-pink-500 p-6 rounded-lg">08</div>
                <div class="bg-pink-500 p-6 rounded-lg">09</div>
                <div class="bg-pink-500 p-6 rounded-lg col-span-2">10</div>
                <div class="bg-pink-500 p-6 rounded-lg">11</div>
                <div class="bg-pink-500 p-6 rounded-lg">12</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1>Layouts</h1>
          <div className='text-white bg-slate-900'>
            <div className="container bg-red-500 px-2">
              {/* Tailwind's container doesn't center itself automatically and doesn't have any built in horizontal padding. use mx-auto to center a container, and use px-{size} to add horizontal padding */}
              {/* Or, you can configure container: {center: true} in config */}
              <h1>Hello</h1>
            </div>
            <div className="container px-2 columns-lg">
              {/* using something like columns-lg is advisable because its automatically responsive */}
              <img src="https://images.unsplash.com/photo-1501862700950-18382cd41497?q=80&w=1719&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" srcset="" />
              <p>Lorem ipsum dolor sit amet   consectetur adipisicing elit. Sed repellat cum doloribus quas assumenda hic nihil, vero consectetur dolor odit harum aspernatur itaque asperiores commodi, placeat tempore adipisci dolorum esse!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed repellat cum doloribus quas assumenda hic nihil, vero consectetur dolor odit harum aspernatur itaque asperiores commodi, placeat tempore adipisci dolorum esse!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed repellat cum doloribus quas assumenda hic nihil, vero consectetur dolor odit harum aspernatur itaque asperiores commodi, placeat tempore adipisci dolorum esse!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed repellat cum doloribus quas assumenda hic nihil, vero consectetur dolor odit harum aspernatur itaque asperiores commodi, placeat tempore adipisci dolorum esse!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed repellat cum doloribus quas assumenda hic nihil, vero consectetur dolor odit harum aspernatur itaque asperiores commodi, placeat tempore adipisci dolorum esse!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed repellat cum doloribus quas assumenda hic nihil, vero consectetur dolor odit harum aspernatur itaque asperiores commodi, placeat tempore adipisci dolorum esse!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed repellat cum doloribus quas assumenda hic nihil, vero consectetur dolor odit harum aspernatur itaque asperiores commodi, placeat tempore adipisci dolorum esse!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed repellat cum doloribus quas assumenda hic nihil, vero consectetur dolor odit harum aspernatur itaque asperiores commodi, placeat tempore adipisci dolorum esse!</p>
            </div>
            <hr></hr>
            <div className="container px-2">
              <img className='float-left w-6' src="https://images.unsplash.com/photo-1501862700950-18382cd41497?q=80&w=1719&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" srcset=""/>
              <img className='float-right w-6' src="https://images.unsplash.com/photo-1501862700950-18382cd41497?q=80&w=1719&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" srcset=""/>
              <p>Lorem ipsum dolor sit amet   consectetur adipisicing elit. Sed repellat cum doloribus quas assumenda hic nihil, vero consectetur dolor odit harum aspernatur itaque asperiores commodi, placeat tempore adipisci dolorum esse!</p>
              <p>Lorem ipsum dolor sit amet   consectetur adipisicing elit. Sed repellat cum doloribus quas assumenda hic nihil, vero consectetur dolor odit harum aspernatur itaque asperiores commodi, placeat tempore adipisci dolorum esse!</p>
            </div>
          </div>
          <hr></hr>
      </div>
    </>
  )
}

export default App
