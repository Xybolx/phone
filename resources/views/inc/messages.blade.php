@if(count($errors) > 0)
    @foreach($errors->all() as $error)
        <div class="col-md-6 offset-md-3">
            <div class='alert alert-danger alert-dismissible'>
                {{$error}}
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
    @endforeach
@endif

@if(session('success'))
    <div class="col-md-6 offset-md-3 mt-5">
        <div class='alert alert-success alert-dismissible'>
            {{session('success')}}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    </div>
@endif

@if(session('error'))
    <div class='alert alert-danger alert-dismissible'>
        {{session('error')}}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
@endif