const generateTeamHTML = (team) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    
    </head>
    <body>
        
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 mb-3 team-heading jumbotron bg-success text-dark">
                    <h1 class="text-center"> My Team</h1>
                </div>
            </div>
        </div>
       
        <div class="container">
            <div class="row">
                <div class="team-area col-12 d-flex justify-content-center">
                    
                </div>
            </div>
        </div>
        <script src="https://kit.fontawesome.com/5e53cf0bb0.js" crossorigin="anonymous"></script>
    </body>`
}