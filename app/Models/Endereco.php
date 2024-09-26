<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Endereco extends Model
{
    use HasFactory;

    protected $table = 'endereco';


    protected $fillable = [
        'logradouro',
        'complemento',
        'cidade',
        'estado',
    ];


    public function usuario()
    {
        return $this->hasMany(User::class , 'idEndereco' , 'id');
    }


}
