<script>

</script>

<template>
  <h1> App 5 Forms </h1>
    <form>
      <br>
      <p1>Abritrary Text</p1>
      <hr>
      <div class="columns3">
        <p><label>Text <br><input></label></p>
        <form class="search" action="https://www.google.com/search" method="get"> <label>Search <br><input type="search"
              name="q"></label> <input type="submit" value="Go!">
        </form>
        <p><label>Text Area <br><textarea></textarea></label></p>
      </div>

      <p1>Validated Text</p1>
      <hr>
      <div class="columns2">
        <p><label>Email: <br><input type=email></label></p>
        <p><label>Phone: <br><input type=tel></label></p>
        <p><label>URL: <br><input type=url></label></p>
      </div>

      <p1>Programmable Selection Controls</p1>
      <hr>
      <div class="columns">
        <fieldset>
          <p> Cat Type </p>
          <p><label> <input type=radio> Tabby </label></p>
          <p><label> <input type=radio> Calico </label></p>
          <p><label> <input type=radio> Bobtail </label></p>
          <p><label> <input type=radio> Mountain Lion </label></p>
        </fieldset>
        <br>
        <fieldset>
          <p> Cat Attributes </p>
          <p><label> <input type=checkbox> Cute </label></p>
          <p><label> <input type=checkbox> Silly </label></p>
          <p><label> <input type=checkbox> Fast </label></p>
          <p><label> <input type=checkbox> Long-haired </label></p>
        </fieldset>
      </div>

        <div class="columns">
          <div>
            <label> Choose a cat!  </label> <input list="catchoices">
            <datalist id="catchoices">
              <option value="Gremlin"></option>
              <option value="Dinkers"></option>
              <option value="Lolly-Bee"></option>
            </datalist>
          </div>

          <div>
            <label for="catchoices2"> Choose a NEW pet! </label> 
            <select id="catchoices2">
              <option value="">--Please choose an option--</option>
              <option value="Cat">Cat1</option>
              <option value="Cat">Cat2</option>
              <option value="Cat">Cat3</option>
              <option value="Cat">Cat4</option>
            </select>
          </div>

        </div>
        

      <p1>System Data Selection Controls</p1>
      <hr>
      <div class="columns3">
        <p><label> Date <br><input type=date></label></p>
        <p><label> Time <br><input type=time></label></p>
        <p><label> Date-Time <br><input type=datetime-local></label></p>
      </div>
      <div class="columns2">
        <p>Upload a Cat <br><label> <input type=file> </label></p>
        <p>Choose Cat Color <br><label> <input type="color"> </label></p>
        <p>Enter Password: <br><label> <input type="password"> </label></p>

      </div>

      <p1>Numeric Selection and Display Controls</p1>
      <hr>
      <div class="columns">
        <div>
          <label> Number of Cats: </label> <input type="number" min="5" max="100">
        </div>
        <div>
          <label> More Cats? </label> <input type="range" min="0" max="15">
        </div>
      </div>
      <div class="columns">
        <div>
          <label> Cat Purring Progress...</label> <progress max="100" value="50">50%</progress>
        </div>
        <div>
          <label> Cat Toe Beans Counted: </label> <meter min="0" max="20" value="5">1/4 of the way there!</meter>
        </div>
      </div>

      <p1>Buttons!</p1>
      <hr>
      <div class="columns2">
        <div>
          <button type="button">Like a Cat</button>
        </div>
        <div>
          <input type="submit" value="submit">
        </div>
        <div>
          <input type="reset" value="reset">
        </div>
      </div>

      <div class="columns">
        <div>
          <input type="submit" value="Pet Cat" />
        </div>
        <form>
          <label>Cat Name Ideas</label> <input type="text">
          <input type="submit" value="submit">
          <input type="reset" value="reset">
        </form>
      </div>
      <div class="columns">
        <div>
          <label>Cat Button</label>
          <br>
          <input type="image" src="cat_meme.png" id="catButton">
        </div>
        <div>
          <label>Like a Cat's Post</label> <br><input type="button" value="Like">
        </div>
      </div>
      

      <p1>Hidden</p1>
      <hr>
      <div class="search">
        <label>Hidden Message: </label><input type="hidden" value="your cat"/>
          <br>
      </div>


    </form>
</template>

<style>
  h1{
    color: black;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: x-large;
    text-align: center;
  }
  hr{
    border-color: darkblue;
    border-radius: 10px;
    border-width: 2px;
    margin: 10px;
  }
  fieldset{
    border-radius: 25px;
    border-color: darkblue;
    width: 200px;
  }
  p{
    background-color: none;
    border: none;
    color: black;
    font-size: large;
    font-weight:lighter;
    margin: 0px
  }
  p1{
    font-size: larger;
    color: darkblue;
    margin: 20px;
    font-weight: bold;
    font-family:sans-serif;
  }
  .search{
    margin: 30px;
  }
  form{
    background-color: lightblue;
    border-radius: 15 px;
  }
  input{
    border-radius: 5px;
    border-color: black;
  }
  textarea{
    border-radius: 5px;
    border-width: 2px;
    border-color: black;
  }
  .columns{
    column-count: 2;
    column-gap: 0px;
    align-content: center;
    margin: 20px;
  }
  .columns2{
    column-count: 3;
    column-gap: 0px;
    align-content: center;
    margin: 20px;
  }
  .columns3{
    column-count: 3;
    column-gap: 30px;
    align-content: center;
    margin: 20px;
  }
  .columns4{
    column-count: 4;
    column-gap: 20px;
    align-content: center;
    margin: 20px;
  }
  #catButton{
    width: 100px;
  }
</style>