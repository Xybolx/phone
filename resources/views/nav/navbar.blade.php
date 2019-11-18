<nav class="navbar navbar-expand-md navbar-dark bg-dark">
  <a class="navbar-brand" href="/"><i class="fas fa-mobile-alt"></i> Phonebook</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
    <span class="fas fa-bars fa-2x"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarsExampleDefault">
    <ul class="navbar-nav mr-auto text-center">
      <li class="nav-item">
        <a class="nav-link" href="/posts"><i class="fas fa-users fa-fw"></i> Contacts</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/posts/create"><i class="fas fa-user-plus fa-fw"></i> Create</a>
      </li>
    </ul>
    <div class="text-right">
        <div class="input-group">
            {!! Form::open(['action' => ['PostsController@show', 'show'],  'method' => 'GET', 'class' => 'form-inline my-2 my-lg-0']) !!}
                {{Form::label('search', 'Search', ['class' => 'text-light mr-2'])}}
                {{Form::text('search', '', ['class' => 'form-inline', 'placeholder' => 'First/Last Name Or Title', 'aria-label' => 'search', 'aria-describedby' => 'search-button'])}}
                <button class="btn btn-success btn-sm form-inline" type="submit"><i class="fas fa-search"></i></button>
            {!! Form::close() !!}
        </div>
    </div>
  </div>
</nav>