module SchemaPrinter
    def self.print!
        schema_path = Rails.root.join("db/schema.graphql")

        schema = GraphQL::Schema::Printer.print_schema(GraphqlFunSchema)
        old_schema = begin
            File.read(schema_path)
        rescue
            ""
        end

        # Guard clause to prevent useless writes
        return if schema.squish == old_schema.squish

        File.open(schema_path, "w") do |f|
            f.puts schema
        end
    end
end